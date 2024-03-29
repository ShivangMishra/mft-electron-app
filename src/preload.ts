// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, ipcMain, contextBridge } from "electron";
import { org } from "../node-sdk/src/airavata_mft_sdk/common/StorageCommon";
import StorageListEntry = org.apache.airavata.mft.resource.stubs.storage.common.StorageListEntry;

document.addEventListener("DOMContentLoaded", () => {
  ipcRenderer.send("storageList:request");
});

ipcRenderer.on("storageList:response", (event, items: StorageListEntry[]) => {
  const storageList = document.getElementById("storage-list");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.storageName;
    storageList.appendChild(li);
  });
});

