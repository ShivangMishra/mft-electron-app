import {
  Add,
  Create,
  Delete,
  FilterList,
  PlusOne,
  Sort,
} from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import StorageTable from "../components/StorageTable";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function Home(props: {}) {
  const [storageList, setStorageList] = React.useState<StorageEntry[]>([]);
  const [selectedStorages, setSelectedStorages] = React.useState<
    StorageEntry[]
  >([]);
  const navigate = useNavigate();
  const fetchStorages = async () => {
    const storageList = await window.api.listStorages();
    setStorageList(storageList);
  };

  const addStorage = () => {
    console.log("add storage");
  };

  const removeSelectedStorages = async () => {
    console.log("selectedStorages", selectedStorages);
    for (const storage of selectedStorages) {
      await window.api.removeSecretForStorage(storage.storageId);
    }
    fetchStorages();
  };

  useEffect(() => {
    fetchStorages();
  }, []);

  const openStorage = async (storage: StorageEntry) => {
    navigate("/storage", { state: { storage } });
  };

  return (
    <Box bgcolor="background.default" width="100%">
      <Typography variant="h4" component="h4" marginBottom="0.5rem">
        Storages
      </Typography>
      <Button onClick={removeSelectedStorages} disabled={selectedStorages.length === 0} variant="contained" startIcon={<Delete />} color="error">
        Remove
      </Button>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{ marginLeft: "0.5rem" }}
        onClick={addStorage}
      >
        Add Storage
      </Button>
      <Box
        display="flex"
        width="80%"
        alignItems="center"
        marginBottom="0.5rem"
        marginTop="0.5rem"
      >
        <Box width="30%">
          <SearchBar onSearch={(search) => console.log(search)} />
        </Box>
        <IconButton aria-label="search">
          <Sort />
        </IconButton>
        <IconButton aria-label="search">
          <FilterList />
        </IconButton>
      </Box>
      <StorageTable
        storageList={storageList}
        openStorage={openStorage}
        selectStorages={(storages) => {
          setSelectedStorages(storages);
        }}
      />
    </Box>
  );
}
