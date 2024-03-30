import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

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

export default function StorageTable(props: { storageList: StorageEntry[] }) {
  const { storageList } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Storage Name</TableCell>
            <TableCell align="right">Storage Type</TableCell>
            <TableCell align="right">Storage ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storageList.map((storage) => (
            <TableRow
              key={storage.storageName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <Button sx={{ marginTop: 0, marginBottom: 0 }}>
                  {storage.storageName}
                </Button>
              </TableCell>
              <TableCell align="right">
                {StorageType[storage.storageType]}
              </TableCell>
              <TableCell align="right">{storage.storageId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
