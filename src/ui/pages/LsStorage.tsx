import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DirectoryMetadata, ResourceMetadata } from "src/grpc/mftAgentStubs";
import { lsStorage } from "src/grpc/storage";
import FileExplorer from "../components/FileExplorer";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { ArrowBack, ArrowForward, Refresh } from "@mui/icons-material";
import { RotatingLines } from "react-loader-spinner";

export default function LsStorage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = React.useState<number>(0);
  const [resourceMetadataList, setResourceMetadataList] = React.useState<
    ResourceMetadata[]
  >([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [storage, setStorage] = React.useState<StorageEntry>();

  const loadStorage = async (storage: StorageEntry) => {
    setLoading(true);
    const lsResponse = await window.api.lsStorage(storage.storageId);
    setStorage(storage);
    setCurrentIdx(0);
    setResourceMetadataList([lsResponse]);
    setLoading(false);
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
    setLoading(true);
    const lsResponse = await window.api.lsStorage(
      storage.storageId,
      directory.resourcePath
    );
    lsResponse.directory.friendlyName = directory.friendlyName;
    lsResponse.directory.resourcePath = directory.resourcePath;
    setResourceMetadataList([...resourceMetadataList, lsResponse]);
    setCurrentIdx(currentIdx + 1);
    setLoading(false);
  };

  useEffect(() => {
    const storage: StorageEntry = location.state.storage;
    loadStorage(storage);
  }, []);

  return (
    <Box sx={{padding: "1rem"}}>
       <Box sx={{ position: "absolute", width: "100%", height: "100%", bgcolor: "", display: "flex", justifyContent: "center", alignItems: "center", left: 0, top: 0 }}>
        <RotatingLines strokeColor="blue" visible={loading} />
      </Box>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <Typography variant="h5" component="h5" marginBottom="0.5rem">
            {storage?.storageName || location.state.storage.storageName}/
            {resourceMetadataList[currentIdx]?.directory.resourcePath}
          </Typography>
          <Button onClick={()=>loadStorage(storage)} startIcon={<Refresh/>}>
            Refresh Storage
          </Button>
        </Box>
      </Box>
      {resourceMetadataList[currentIdx]?.directory && (
        <FileExplorer
          files={resourceMetadataList[currentIdx].directory.files}
          directories={resourceMetadataList[currentIdx].directory.directories}
          selectDirectory={selectDirectory}
        />
      )}
    </Paper>
    </Box>
  );
}
