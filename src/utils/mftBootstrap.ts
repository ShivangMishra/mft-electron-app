import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import { platform } from "process";

import { exec, spawn } from "child_process";
import axios from "axios";
import AdmZip from "adm-zip";
import * as net from "net";

function javaversion(): Promise<string> {
  return new Promise((resolve, reject) => {
    exec("java -version", (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        const javaVersion = RegExp("(java|openjdk) version").test(stderr)
          ? stderr.split(" ")[2].replace(/"/g, "")
          : undefined;
        javaVersion ? resolve(javaVersion) : reject("Java is not installed");
        return;
      }
    });
  });
}

async function validateJavaAvailability(
  requiredVersion: number
): Promise<void> {
  try {
    const javaVersion = await javaversion();
    const versionNumber = parseFloat(javaVersion);
    if (versionNumber < requiredVersion) {
      console.error(
        `Airavata MFT requires Java version ${requiredVersion} or higher`
      );
      console.error(
        `If you have more than one version of Java, please set Java version ${requiredVersion} or higher in the path.`
      );
      process.exit(1);
    }
  } catch (error) {
    console.debug("error", error);
    console.error(
      "Java is either not installed or the path is not set properly"
    );
    process.exit(1);
  }
}

async function downloadAndUnarchive(
  url: string,
  downloadPath: string,
  extractDir: string = path.join(require("os").homedir(), ".mft/")
): Promise<void> {
  const response = await axios.get(url, { responseType: "stream" });
  const fileSize = Number(response.headers["content-length"]);

  let downloadedSize = 0;
  const progress = setInterval(() => {
    console.debug(`Download progress: ${downloadedSize} / ${fileSize}`);
  }, 1000);

  await new Promise<void>((resolve, reject) => {
    const fileStream = fs.createWriteStream(downloadPath);
    response.data.pipe(fileStream);
    response.data.on("data", (chunk: Buffer) => {
      downloadedSize += chunk.length;
    });
    fileStream.on("finish", () => {
      clearInterval(progress);
      console.debug("Download completed");
      resolve();
    });
    fileStream.on("error", (err: Error) => {
      clearInterval(progress);
      reject(err);
    });
  });

  console.debug("Unarchiving ...");
  const zip = new AdmZip(downloadPath);
  zip.extractAllTo(extractDir, true);
  fs.unlinkSync(downloadPath);
}

async function waitUntilPortIsOpen(
  port: number,
  host: string = "localhost",
  timeout: number = 5000
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    let retries = 0;
    const maxRetries = 10;
    const retryInterval = 1000; // 1 second

    const tryConnect = () => {
      const socket = new net.Socket();
      socket.on("connect", () => {
        socket.destroy();
        console.debug(`Connected to ${host}:${port}`);
        resolve();
      });
      socket.on("error", (err) => {
        if (retries < maxRetries) {
          console.debug(`Trying to connect to ${host}:${port}...`);
          retries++;
          setTimeout(tryConnect, retryInterval);
        } else {
          socket.destroy();
          reject(
            `Failed to connect after ${maxRetries} attempts ${err.message}`
          );
        }
      });

      socket.connect(port, host);
    };

    tryConnect();
  });
}

async function restartService(
  binPath: string,
  daemonScriptName: string
): Promise<void> {
  const currentDir = process.cwd();
  try {
    process.chdir(binPath);
    fs.chmodSync(daemonScriptName, 0o744);
    try {
      console.debug(`Stopping service ${daemonScriptName}`);
      await execCommand(`./${daemonScriptName} stop`);
    } catch (error) {
      console.error(
        `Failed to stop service ${daemonScriptName}: ${error.message}`
      );
    }
    console.debug(`Starting service ${daemonScriptName}`);
    await execCommand(`./${daemonScriptName} start`);
  } catch (error) {
    console.error(
      `Failed to restart service ${daemonScriptName}: ${error.message}`
    );
  } finally {
    process.chdir(currentDir);
  }
}

async function stopService(
  binPath: string,
  daemonScriptName: string
): Promise<void> {
  const currentDir = process.cwd();
  try {
    process.chdir(binPath);
    fs.chmodSync(daemonScriptName, 0o744);
    await execCommand(`./${daemonScriptName} stop`);
  } finally {
    process.chdir(currentDir);
  }
}

function execCommand(command: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(new Error(stderr));
        return;
      }
      resolve();
    });
  });
}
async function isServiceRunning(daemonScriptName: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    exec(`pgrep -f ${daemonScriptName}`, (error, stdout) => {
      if (error && error.code !== 1) {
        // Ignore error if pgrep returns 1 (no process found)
        reject(error);
        return;
      }
      resolve(stdout.trim() !== "");
    });
  });
}
async function startMFT(restart = false) {
  console.debug("Setting up MFT Services...");
  let isMftRunning = false;
  try {
    isMftRunning = await isServiceRunning("standalone-service-daemon.sh");
    console.debug("MFT is running:", isMftRunning);
  } catch (err) {
    console.error("Failed to check if MFT is running:", err);
  }
  if (!restart && isMftRunning) {
    console.debug("MFT is already running");
    return;
  }
  const requiredJavaVersion = 11;

  let consulUrl: string;
  switch (platform as string) {
    case "linux":
    case "linux2":
      consulUrl =
        "https://releases.hashicorp.com/consul/1.7.1/consul_1.7.1_linux_amd64.zip";
      await validateJavaAvailability(requiredJavaVersion);
      break;
    case "darwin":
      consulUrl =
        "https://releases.hashicorp.com/consul/1.7.1/consul_1.7.1_darwin_amd64.zip";
      await validateJavaAvailability(requiredJavaVersion);
      break;
    case "win32":
      console.debug("Windows support is not available yet");
      process.exit();
    default:
      console.debug("Unsupported platform: " + platform);
      process.exit();
  }

  const mftDir = path.join(os.homedir(), ".mft");
  if (!fs.existsSync(mftDir)) {
    fs.mkdirSync(mftDir, { recursive: true });
  }

  const consulPath = path.join(mftDir, "consul");
  if (!fs.existsSync(consulPath)) {
    console.debug("Downloading Consul...");
    const zipPath = path.join(mftDir, "consul.zip");
    await downloadAndUnarchive(consulUrl, zipPath, mftDir);
  }

  const currentDir = process.cwd();
  try {
    process.chdir(mftDir);
    fs.chmodSync("consul", 0o744);

    if (fs.existsSync("consul.pid")) {
      const pid = fs.readFileSync("consul.pid", "utf8");
      spawn("kill", ["-9", pid]);
    }

    const consulProcess = spawn("nohup", ["./consul", "agent", "-dev"], {
      detached: true,
      stdio: [
        "ignore",
        fs.openSync("consul.log", "w"),
        fs.openSync("consul.err.log", "a"),
      ],
    });

    console.debug("Consul process id: " + consulProcess.pid);
    fs.writeFileSync("consul.pid", consulProcess.pid.toString());
  } finally {
    process.chdir(currentDir);
  }

  const mftPath = path.join(mftDir, "Standalone-Service-0.01");
  if (!fs.existsSync(mftPath)) {
    const url =
      "https://github.com/apache/airavata-mft/releases/download/v0.0.1/Standalone-Service-0.01-bin.zip";
    console.debug("Downloading MFT Server...");
    const zipPath = path.join(mftDir, "Standalone-Service-0.01-bin.zip");
    await downloadAndUnarchive(url, zipPath, mftDir);
  }

  try {
    await waitUntilPortIsOpen(8500);
    console.debug("Consul Port is open");
  } catch (err) {
    console.error("Failed to open port:", err);
  }
  await restartService(
    path.join(mftPath, "bin"),
    "standalone-service-daemon.sh"
  );
  try {
    await waitUntilPortIsOpen(7003);
    console.debug("MFT service is running");
  } catch (err) {
    console.error("MFT service not running:", err);
    throw new Error("MFT service not running");
  }
  console.debug("MFT Started");
}

export { startMFT };
