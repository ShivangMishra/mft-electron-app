import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";

enum StorageType {
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

export default function StorageTable(props: {
  storageList: StorageEntry[];
  selectStorages: (storages: StorageEntry[]) => void;
  openStorage: (storage: StorageEntry) => void;
}) {
  const { storageList, selectStorages, openStorage } = props;
  const columns: GridColDef[] = [
    {
      field: "storageName",
      headerName: "Storage Name",
      width: 150,
      renderCell: (params: GridRenderCellParams<any, string>) => (
        <Button
          sx={{ marginTop: 0, marginBottom: 0, textTransform: "none" }}
          onClick={() => {
            console.log("params", params);
            console.log(params.value);
            openStorage(params.row as StorageEntry);
          }}
        >
          {params.value}
        </Button>
      ),
    },
    { field: "storageType", headerName: "Storage Type", width: 130,
    valueGetter: (value) => {
        return StorageType[value as StorageType];
      }
  },
    { field: "storageId", headerName: "Storage ID", width: 300 },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={storageList}
        columns={columns}
        getRowId={(row) => row.storageId}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        onRowSelectionModelChange={(selection: GridValidRowModel) => {
            const selectedStorages = storageList.filter((storage) =>
              selection.includes(storage.storageId)
            )
            selectStorages(selectedStorages);
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}
