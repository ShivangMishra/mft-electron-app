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
    const child = spawn("java", ["-version"]);

    let stderr = "";

    child.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    child.on("error", (error) => {
      reject(error);
    });

    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Command 'java -version' exited with code ${code}`));
        return;
      }

      const javaVersion = /(?:java|openjdk) version "([\d._]+)"/.exec(stderr);
      if (javaVersion && javaVersion.length > 1) {
        resolve(javaVersion[1]);
      } else {
        reject("Java is not installed");
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
    const maxRetries = 5;
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
    const parts = command.split(" ");
    const child = spawn(parts[0], parts.slice(1));

    child.on("error", (err) => {
      reject(err);
    });

    child.on("exit", (code, signal) => {
      if (code !== 0) {
        reject(new Error(`Command ${command} exited with code ${code}`));
        return;
      }
      if (signal) {
        reject(
          new Error(`Command ${command} was terminated by signal ${signal}`)
        );
        return;
      }
      resolve();
    });
  });
}

function isPortOpen(port: number, host = "localhost") {
  return new Promise((resolve, reject) => {
    const socket = new net.Socket();
    socket.setTimeout(2000); // 2 seconds timeout

    socket.on("connect", () => {
      socket.destroy(); // close the connection
      console.debug(`Port ${port} is open`);
      resolve(true);
    });

    socket.on("timeout", () => {
      socket.destroy(); // close the connection
      resolve(false);
    });

    socket.on("error", (err) => {
      socket.destroy(); // close the connection
      if ((err as any).code === "ECONNREFUSED") {
        resolve(false);
      } else {
        reject(err);
      }
    });

    socket.connect(port, host);
  });
}

const isMftRunning = async () => {
  // TODO: Implement a better way to check if MFT server is running and available. Will need changes in MFT server or standalone service daemon.
  const mftDir = path.join(os.homedir(), ".mft");
  const consulPidPath = path.join(mftDir, "consul.pid");
  const mftPidPath = path.join(
    mftDir,
    "Standalone-Service-0.01",
    "bin",
    "service-pid"
  );
  const isMftRunning = await new Promise((resolve, reject) => {
    exec(
      'pgrep -f "Standalone-*" | xargs ps -o comm -p',
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          reject(new Error(stderr));
          return;
        }
        resolve(stdout.trim().length > 0);
      }
    );
  });
  return (
    fs.existsSync(consulPidPath) && fs.existsSync(mftPidPath) && isMftRunning && (await isPortOpen(8500))
  );
};

async function startMFT(restart = false) {
  console.debug("Setting up MFT Services...");

  if (!restart && (await isMftRunning())) {
    console.debug("MFT services are already running");
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

  let mftRunning = false;
  while (!mftRunning) {
    try {
      await restartService(
        path.join(mftPath, "bin"),
        "standalone-service-daemon.sh"
      );
      await waitUntilPortIsOpen(7003);
      console.debug("MFT service started");
      mftRunning = true;
    } catch (err) {
      console.error("MFT service not running:", err);
      console.debug("Trying to restart MFT service...");
    }
  }
}

export { startMFT };
