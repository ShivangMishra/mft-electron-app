import { FilterList, Sort } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
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
  const navigate = useNavigate();
  const fetchStorages = async () => {
    const storageList = await window.api.listStorages();
    console.log("Storages in react", storageList);
    setStorageList(storageList);
  };

  useEffect(() => {
    console.log("useEffect");
    fetchStorages();
  }, []);

  const selectStorage = async (storage: StorageEntry) => {
    navigate("/storage", { state: { storage} });
  };

  return (
    <Box bgcolor="background.default" width="100%">
      <Typography variant="h4" component="h4" marginBottom="0.5rem">
        Storages
      </Typography>
      <Box display="flex" width="80%" alignItems="center" marginBottom="0.5rem">
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
      <StorageTable storageList={storageList} selectStorage={selectStorage} />
    </Box>
  );
}
