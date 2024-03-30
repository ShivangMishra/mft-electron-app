import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DirectoryMetadata, ResourceMetadata } from "src/grpc/mftAgentStubs";
import { lsStorage } from "src/grpc/storage";
import FileExplorer from "../components/FileExplorer";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function LsStorage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = React.useState<number>(0);
  const [resourceMetadataList, setResourceMetadataList] = React.useState<
    ResourceMetadata[]
  >([]);

  //   const [storageId, setStorageId] = React.useState<string>("");
  const [storage, setStorage] = React.useState<StorageEntry>();

  const loadStorage = async (storage: StorageEntry) => {
    const lsResponse = await window.api.lsStorage(storage.storageId);
    const files = lsResponse.directory.files;
    setStorage(storage);
    setResourceMetadataList([lsResponse]);
  };

  const selectDirectory = async (directory: DirectoryMetadata) => {
    if (
      resourceMetadataList.filter(
        (resourceMetadata) =>
          resourceMetadata.directory.resourcePath === directory.resourcePath
      ).length > 0
    ) {
      setCurrentIdx(currentIdx + 1);
      return;
    }
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
          onClick={() => {
            if (currentIdx === 0) {
              navigate("/");
              return;
            }
            setCurrentIdx(currentIdx - 1);
          }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          disabled={
            resourceMetadataList.length === 0 ||
            currentIdx === resourceMetadataList.length - 1
          }
          onClick={() => setCurrentIdx(currentIdx + 1)}
        >
          <ArrowForward />
        </IconButton>
        <Typography variant="h4" component="h4" marginBottom="0.5rem">
          {storage?.storageName || location.state.storage.storageName}/
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
