// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, ipcMain, contextBridge } from "electron";
import { org } from "../node-sdk/src/airavata_mft_sdk/common/StorageCommon";
import StorageListEntry = org.apache.airavata.mft.resource.stubs.storage.common.StorageListEntry;
import { ResourceMetadata } from "./grpc/mftAgentStubs";

document.addEventListener("DOMContentLoaded", () => {
  ipcRenderer.send("storageList:request");
});

ipcRenderer.on("storageLs:response", (event, response: ResourceMetadata) => {
  console.log("lsResponse", JSON.stringify(response));
  const files = response.directory.files;
  files.forEach((file) => {

  });
  // lsResponse {"directory":
  //{"friendlyName":"","createdTime":0,"updateTime":0,"resourcePath":"",
  //"directories":[],
  //"files":[
  //{
  //"friendlyName":"mylogo.png",
  //"resourceSize":50377,
  //"createdTime":1711662590000,
  //"updateTime":1711662590000,
  //"md5sum":"",
  //"resourcePath":"mylogo.png"
  //}]},"error":0}
});

ipcRenderer.on("storageList:response", (event, items: StorageListEntry[]) => {
  const storageList = document.getElementById("storage-list");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.onclick = () => {
      ipcRenderer.send("storageLs:request",
        {
          storageId: item.storageId,
          storageName: item.storageName,
          storageType: item.storageType
        });
    };
    li.classList.add("storage-item");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("cell");
    nameSpan.textContent = item.storageName;
    li.appendChild(nameSpan);

    const typeSpan = document.createElement("span");
    typeSpan.classList.add("cell");
    typeSpan.textContent = item.storageType.toString();
    li.appendChild(typeSpan);

    const idSpan = document.createElement("span");
    idSpan.classList.add("cell");
    idSpan.textContent = item.storageId;
    li.appendChild(idSpan);

    storageList.appendChild(li);
  });
});

contextBridge.exposeInMainWorld('api', {
  listStorages: async () => {
    return await ipcRenderer.invoke("storageList:request");
  },
  lsStorage: async (storageId: string) => {
    return await ipcRenderer.invoke("storageLs:request", { storageId });
  }
});
