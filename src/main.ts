import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { listStoragesRpc, removeSecretForStorage } from './grpc/common/storageCommon';
import { addAwsS3Storage, fetchAwsS3BucketList, lsStorage } from './grpc/storage';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  ipcMain.handle("storageList:request", async (event) => {
    return new Promise((resolve, reject) => {
      listStoragesRpc()
        .then((response) => {
          resolve(response.toObject().storageList);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
  ipcMain.handle("storageLs:request", async (event, {
    storageId, resourcePath
  }) => {
    const lsResponse = (await lsStorage(storageId, resourcePath)).toObject();
    return lsResponse;
  });

  ipcMain.handle("storageRemove:request", async (event, {
    storageId, resourcePath
  }) => {
    const response = (await removeSecretForStorage(storageId)).toObject();
    return response;
  });

  ipcMain.handle("fetchAwsS3BucketList:request", async (event, {
    accessKey,
    secretKey,
    region,
  }) => {
    const response = (await fetchAwsS3BucketList({
      accessKey,
      secretKey,
      region,
    }
    )).toObject();
    return response;
  });
  ipcMain.handle("addAwsS3Storage:request", async (event, {
    accessKey,
    secretKey,
    region,
    bucketName,
    storageName,
  }) => {
    const response = (await addAwsS3Storage({
      accessKey,
      secretKey,
      region,
      bucketName,
      storageName,
    })).toObject();
    return response;
  });
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
