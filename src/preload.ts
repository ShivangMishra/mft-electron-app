// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, ipcMain, contextBridge } from "electron";
import { org } from "../node-sdk/src/airavata_mft_sdk/common/StorageCommon";
import StorageListEntry = org.apache.airavata.mft.resource.stubs.storage.common.StorageListEntry;
import { ResourceMetadata } from "./grpc/mftAgentStubs";

document.addEventListener("DOMContentLoaded", () => {
  ipcRenderer.send("storageList:request");
});


contextBridge.exposeInMainWorld('api', {
  listStorages: async () => {
    return await ipcRenderer.invoke("storageList:request");
  },
  lsStorage: async (storageId: string) => {
    return await ipcRenderer.invoke("storageLs:request", { storageId });
  }
});
