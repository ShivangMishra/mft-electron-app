import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DirectoryMetadata, ResourceMetadata } from "src/grpc/mftAgentStubs";
import { lsStorage } from "src/grpc/storage";
import FileExplorer from "../components/FileExplorer";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function LsStorage() {
  const location = useLocation();

  const [currentIdx, setCurrentIdx] = React.useState<number>(0);
  const [resourceMetadataList, setResourceMetadataList] = React.useState<
    ResourceMetadata[]
  >([]);

  //   const [storageId, setStorageId] = React.useState<string>("");
  const [storage, setStorage] = React.useState<StorageEntry>();

  const loadStorage = async (storage: StorageEntry) => {
    const lsResponse = await window.api.lsStorage(storage.storageId);
    console.log("lsResponse", JSON.stringify(lsResponse));
    const files = lsResponse.directory.files;
    setStorage(storage);
    setResourceMetadataList([lsResponse]);
  };

  const selectDirectory = async (directory: DirectoryMetadata) => {
    console.log("selectDirectory", JSON.stringify(directory.resourcePath));
    console.log(
      "all directories",
      JSON.stringify(resourceMetadataList.map((x) => x.directory.resourcePath))
    );
    if (
      resourceMetadataList.filter(
        (resourceMetadata) =>
          resourceMetadata.directory.resourcePath === directory.resourcePath
      ).length > 0
    ) {
      console.log("Already loaded", JSON.stringify(directory));
      setCurrentIdx(currentIdx + 1);
      return;
    }
    console.log("selectDirectory", JSON.stringify(directory));
    const lsResponse = await window.api.lsStorage(
      storage.storageId,
      directory.resourcePath
    );
    lsResponse.directory.friendlyName = directory.friendlyName;
    lsResponse.directory.resourcePath = directory.resourcePath;
    setResourceMetadataList([...resourceMetadataList, lsResponse]);
    setCurrentIdx(currentIdx + 1);
  };

  useEffect(() => {
    const storage: StorageEntry = location.state.storage;
    loadStorage(storage);
  }, []);

  return (
    <Paper>
      <Box>
        <IconButton
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(currentIdx - 1)}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          disabled={currentIdx === resourceMetadataList.length - 1}
          onClick={() => setCurrentIdx(currentIdx + 1)}
        >
          <ArrowForward />
        </IconButton>
        <Typography variant="h4" component="h4" marginBottom="0.5rem">
        {storage?.storageName ||
            location.state.storage.storageName}/
          {resourceMetadataList[currentIdx]?.directory.resourcePath}
        </Typography>
      </Box>
      {resourceMetadataList[currentIdx]?.directory && (
        <FileExplorer
          files={resourceMetadataList[currentIdx].directory.files}
          directories={resourceMetadataList[currentIdx].directory.directories}
          selectDirectory={selectDirectory}
        />
      )}
    </Paper>
  );
}
