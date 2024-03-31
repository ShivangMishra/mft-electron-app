import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ResourceMetadata } from "../grpc/mftAgentStubs";
import Home from "./pages/Home";
import LsStorage from "./pages/LsStorage";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import { SecretForStorage } from "src/grpc/common/storageCommon";

export enum StorageType {
  S3 = 0,
  SCP = 1,
  FTP = 2,
  LOCAL = 3,
  BOX = 4,
  DROPBOX = 5,
  GCS = 6,
  AZURE = 7,
  SWIFT = 8,
  ODATA = 9,
  HTTP = 10,
}
declare global {
  interface StorageEntry {
    storageId?: string;
    storageName?: string;
    storageType?: StorageType;
  }
  interface Window {
    api: {
      listStorages: () => Promise<StorageEntry[]>;
      lsStorage: (
        storageId: string,
        resourcePath?: string
      ) => Promise<ResourceMetadata>;
      removeSecretForStorage: (storageId: string) => Promise<void>;
      fetchAwsS3BucketList: (data: {
        accessKey: string,
        secretKey: string,
        sessionToken?: string,
        region: string,
      }) => Promise<ResourceMetadata>;
      addAwsS3Storage: (data: {accessKey: string,
        secretKey: string,
        sessionToken?: string,
        region: string,
        bucketName: string,
        storageName: string,
    } ) => Promise<SecretForStorage>;
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
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/storage" element={<LsStorage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
