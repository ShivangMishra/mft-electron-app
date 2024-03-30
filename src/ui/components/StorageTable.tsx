import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

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
                <Button sx={{marginTop: 0, marginBottom: 0}}>{storage.storageName}</Button>
              </TableCell>
              <TableCell align="right">{storage.storageType}</TableCell>
              <TableCell align="right">{storage.storageId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
