import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FilterList, Sort, Title } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import StorageTable from "./StorageTable";
import SearchBar from "./SearchBar";

declare global {
  interface StorageEntry {
    storageId?: string;
    storageName?: string;
    storageType?: any;
  }
  interface Window {
    api: {
      listStorages: () => Promise<StorageEntry[]>;
    };
  }
}

export default function App() {
  const [storageList, setStorageList] = React.useState<StorageEntry[]>([]);
  const fetchStorages = async () => {
    const storageList = await window.api.listStorages();
    console.log("Storages in react", storageList);
    setStorageList(storageList);
  };

  useEffect(() => {
    console.log("useEffect");
    fetchStorages();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: "#f5f5f5",
        paper: "#0222",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" width="100%">
        <Typography variant="h4" component="h4">
          Storages
        </Typography>
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          marginBottom="0.5rem"
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
        <StorageTable storageList={storageList} />
      </Box>
    </ThemeProvider>
  );
}
