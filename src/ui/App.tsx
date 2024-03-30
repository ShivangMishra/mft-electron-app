import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StorageType } from "../grpc/common/storageCommon";
import { ResourceMetadata } from "src/grpc/mftAgentStubs";
import Home from "./pages/Home";
import LsStorage from "./pages/LsStorage";
import { HashRouter, Route, Router, Routes } from "react-router-dom";

declare global {
  interface StorageEntry {
    storageId?: string;
    storageName?: string;
    storageType?: StorageType;
  }
  interface Window {
    api: {
      listStorages: () => Promise<StorageEntry[]>;
      lsStorage: (storageId: string) => Promise<ResourceMetadata>;
    };
  }
}

export default function App() {
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
      {/* {currentPage === 0 && (
        <Home
          selectStorage={(storageId: string) => {
            lsStorage(storageId);
          }}
        />
      )}
      {currentPage === 1 && <LsStorage />} */}
      <HashRouter >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/storage" element={<LsStorage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
