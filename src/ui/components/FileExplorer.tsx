import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Folder, Description } from "@mui/icons-material";
import { DirectoryMetadata, FileMetadata } from "src/grpc/mftAgentStubs";
import { StorageType } from "src/grpc/common/storageCommon";
import { timestampToLocalDateString } from "../../utils/dateUtil";

// Sample data for directories and files
const data = [
  {
    id: "folder1",
    name: "Folder 1",
    type: "folder",
  },
  {
    id: "file1",
    name: "File 1",
    type: "file",
  },
  {
    id: "file2",
    name: "File 2",
    type: "file",
  },
  {
    id: "folder2",
    name: "Folder 2",
    type: "folder",
  },
];

export default function FileExplorer(props: {
  files: FileMetadata[];
  directories: DirectoryMetadata[];
}) {
  const { files, directories } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <TableRow
              key={file.friendlyName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{file.friendlyName}</TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ paddingTop: 0, paddingBottom: 0 }}
              >
                {timestampToLocalDateString(file.updateTime)}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ paddingTop: 0, paddingBottom: 0 }}
              >
                File
              </TableCell>
              <TableCell align="left">{file.resourceSize} bytes</TableCell>
            </TableRow>
          ))}
          {directories.map((directory) => (
            <TableRow
              key={directory.friendlyName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{directory.friendlyName}</TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ paddingTop: 0, paddingBottom: 0 }}
              >
                {timestampToLocalDateString(directory.updateTime)}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ paddingTop: 0, paddingBottom: 0 }}
              >
                Folder
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
