import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ResourceMetadata } from "src/grpc/mftAgentStubs";
import { lsStorage } from "src/grpc/storage";
import FileExplorer from "../components/FileExplorer";
import { Paper, Typography } from "@mui/material";

export default function LsStorage() {
  const location = useLocation();
  const [resourceMetadata, setResourceMetadata] =
    React.useState<ResourceMetadata>();
  //   const [storageId, setStorageId] = React.useState<string>("");
  const [storage, setStorage] = React.useState<StorageEntry>();

  const loadStorage = async (storage: StorageEntry) => {
    const lsResponse = await window.api.lsStorage(storage.storageId);
    console.log("lsResponse", JSON.stringify(lsResponse));
    const files = lsResponse.directory.files;
    setStorage(storage);
    setResourceMetadata(lsResponse);
  };

  useEffect(() => {
    const storage: StorageEntry = location.state.storage;
    loadStorage(storage);
  }, []);

  const response = {
    directory: {
      friendlyName: "",
      createdTime: 0,
      updateTime: 0,
      resourcePath: "",
      //   directories: [],
      files: [
        {
          friendlyName: "mylogo.png",
          resourceSize: 50377,
          createdTime: 1711662590000,
          updateTime: 1711662590000,
          md5sum: "",
          resourcePath: "mylogo.png",
        },
      ],
    },
    error: 0,
  };
  return (
    <Paper>
      <Typography variant="h4" component="h4" marginBottom="0.5rem">
        Contents of {storage?.storageName}
      </Typography>
      {resourceMetadata?.directory && (
        <FileExplorer
          files={resourceMetadata.directory.files}
          directories={resourceMetadata.directory.directories}
        />
      )}
    </Paper>
  );
}
