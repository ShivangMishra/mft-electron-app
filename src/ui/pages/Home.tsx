import {
  Add,
  Delete,
  FilterList,
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
import AddStorageDialog from "../components/AddStorageDialog";
import { RotatingLines } from "react-loader-spinner";

export default function Home() {
  const [storageList, setStorageList] = React.useState<StorageEntry[]>([]);
  const [addStorageDialogOpen, setAddStorageDialogOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [selectedStorages, setSelectedStorages] = React.useState<
    StorageEntry[]
  >([]);
  const navigate = useNavigate();
  const fetchStorages = async () => {
    try {
      const storageList = await window.api.listStorages();
      setStorageList(storageList);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch storages", error);
      alert(
        error.message +
        "Failed to fetch storages:" + error + "Please note: This is just a proof of concept. " +
        "\nSo here might be lots of corner cases that I have not noticed." +
        "\nWhen you see an error, try restarting the app, and send me an email at shivang978@gmail.com."
      );
      setStorageList([]);
    }
  };

  const addStorage = () => {
    setAddStorageDialogOpen(true);
  };

  const removeSelectedStorages = async () => {
    for (const storage of selectedStorages) {
      await window.api.removeSecretForStorage(storage.storageId);
    }
    fetchStorages();
  };
  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  };
  useEffect(() => {
    fetchStorages();
  }, []);

  const openStorage = async (storage: StorageEntry) => {
    navigate("/storage", { state: { storage } });
  };

  return (
    <Box width="100%" height="100vh" padding="0.5rem">
      <Box sx={{ position: "absolute", height: "100vh", bgcolor: "", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <RotatingLines strokeColor="blue" visible={loading} />
      </Box>
      <Typography variant="h4" component="h4" marginBottom="1rem">
        Storages
      </Typography>
      <Button
        onClick={removeSelectedStorages}
        disabled={selectedStorages.length === 0}
        variant="contained"
        startIcon={<Delete />}
        color="error"
      >
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
          <SearchBar onSearch={handleSearch} />
        </Box>
        <IconButton aria-label="sort">
          <Sort />
        </IconButton>
        <IconButton aria-label="filter">
          <FilterList />
        </IconButton>
      </Box>
      <StorageTable
        storageList={
          searchText.length === 0
            ? storageList
            : storageList.filter((storage) =>
              storage.storageName.includes(searchText)
            )
        }
        openStorage={openStorage}
        selectStorages={(storages) => {
          setSelectedStorages(storages);
        }}
      />
      <AddStorageDialog
        open={addStorageDialogOpen}
        onClose={() => {
          setAddStorageDialogOpen(false);
          fetchStorages();
        }}
      />
    </Box>
  );
}
