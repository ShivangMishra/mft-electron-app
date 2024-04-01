import React, { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { StorageType } from "../App";
import {
  Box,
  Button,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { fetchAwsS3BucketList } from "src/grpc/storage";

const awsRegions = [
  "us-east-2",
  "us-east-1",
  "us-west-1",
  "us-west-2",
  "af-south-1",
  "ap-east-1",
  "ap-southeast-3",
  "ap-south-1",
  "ap-northeast-3",
  "ap-northeast-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-northeast-1",
  "ca-central-1",
  "cn-north-1",
  "cn-northwest-1",
  "eu-central-1",
  "eu-west-1",
  "eu-west-2",
  "eu-south-1",
  "eu-west-3",
  "eu-north-1",
  "eu-south-2",
  "eu-central-2",
  "sa-east-1",
  "me-south-1",
  "me-central-1",
  "us-gov-east-1",
  "us-gov-west-1",
];

export interface AddStorageDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddStorageDialog(props: AddStorageDialogProps) {
  const { onClose, open } = props;

  const [storageType, setStorageType] = useState<string>("S3");
  const [isAwsS3, setisAwsS3] = useState<boolean>(true);
  const [awsRegion, setAwsRegion] = useState<string>("");
  const [bucket, setBucket] = useState<string>("");
  const [bucketList, setBucketList] = useState<string[]>([]);
  const [accessKey, setAccessKey] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("");
  const [sessionToken, setSessionToken] = useState<string>("");
  const [storageName, setStorageName] = useState<string>("Default Name");

  const handleClose = () => {
    onClose();
  };

  const handleAddS3Storage = async () => {
    if (
      accessKey.length === 0 ||
      secretKey.length === 0 ||
      awsRegion.length === 0 ||
      bucket.length === 0 ||
      storageName.length === 0
    ) {
      alert("All fields except Session Token are mandatory. Please fill them out.");
      return;
    }
    const response = await window.api.addAwsS3Storage({
      accessKey,
      secretKey,
      sessionToken,
      region: awsRegion,
      bucketName: bucket,
      storageName,
    });
    console.log("Add S3 Storage", JSON.stringify(response));
    handleClose();
  };
  const handleAddStorage = () => {
    switch (storageType) {
      case "S3":
        console.log("S3");
        handleAddS3Storage();
        break;
      default:
        alert(
          "Currently in this demo app, " +
            storageType +
            " is not supported. Please try for S3 instead."
        );
    }
  };

  const fetchAwsS3BucketList = async () => {
    try {
      const response = await window.api.fetchAwsS3BucketList({
        accessKey,
        secretKey,
        region: awsRegion,
      });
      setBucketList(
        response.directory.directories.map((dir) => dir.friendlyName)
      );
    } catch (error) {
      alert("Error fetching bucket list: " + JSON.stringify(error));
    }
  };

  useEffect(() => {
    if (accessKey.length > 0 && secretKey.length > 0 && awsRegion.length > 0) {
      fetchAwsS3BucketList();
    }
  }, [awsRegion]);
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box bgcolor="background.default" width="50vw" padding="2rem">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 400,
            // height: "80vh",
            margin: "0 auto",
            padding: "1rem",
            border: `1px solid #808080`,
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
          }}
          autoComplete="off"
        >
          <Typography variant="h5" component="h5" marginBottom="0.5rem">
            Add Storage
          </Typography>
          <FormControl
            sx={{
              margin: "0.5rem",
              minWidth: 120,
            }}
          >
            <InputLabel
              id="storage-type-label"
              sx={{ backgroundColor: "background.default" }}
            >
              Storage Type
            </InputLabel>
            <Select
              labelId="storage-type-label"
              id="storage-type"
              value={storageType}
              onChange={(event) => {
                setStorageType(event.target.value as string);
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: "white",
                  },
                },
              }}
            >
              {Object.keys(StorageType)
                .filter((key) => isNaN(Number(key)))
                .map((storageType) => (
                  <MenuItem key={storageType} value={storageType}>
                    {storageType}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          {storageType === "S3" && (
            <>
              <TextField
                id="access-key-id"
                label="Access Key ID"
                variant="outlined"
                margin="normal"
                onChange={(event) => {
                  setAccessKey((event.target.value as string).trim());
                }}
              />
              <TextField
                id="secret-access-key"
                label="Secret Access Key"
                variant="outlined"
                margin="normal"
                onChange={(event) => {
                  setSecretKey((event.target.value as string).trim());
                }}
              />
              <TextField
                id="session-token"
                label="Session Token"
                variant="outlined"
                margin="normal"
                onChange={(event) => {
                  setSessionToken((event.target.value as string).trim());
                }}
              />
              <FormControl
                component="fieldset"
                sx={{
                  margin: "0.5rem",
                  minWidth: 120,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" component="b">
                  Is this an AWS S3 bucket?
                </Typography>
                <RadioGroup
                  aria-label="isAwsS3"
                  name="isAwsS3"
                  value={isAwsS3 ? "yes" : "no"}
                  onChange={(event) => setisAwsS3(event.target.value === "yes")}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              {isAwsS3 && (
                <>
                  <FormControl
                    sx={{
                      margin: "0.5rem",
                      minWidth: 120,
                    }}
                  >
                    <InputLabel
                      id="aws-region-label"
                      sx={{ backgroundColor: "background.default" }}
                    >
                      AWS Region
                    </InputLabel>
                    <Select
                      labelId="aws-region-label"
                      id="aws-region"
                      value={awsRegion}
                      onChange={(event) => {
                        setAwsRegion(event.target.value as string);
                      }}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            backgroundColor: "white",
                          },
                        },
                      }}
                    >
                      {awsRegions.map((awsRegion) => (
                        <MenuItem key={awsRegion} value={awsRegion}>
                          {awsRegion}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl
                    sx={{
                      margin: "0.5rem",
                      minWidth: 120,
                    }}
                  >
                    <InputLabel
                      id="bucket-label"
                      sx={{ backgroundColor: "background.default" }}
                    >
                      Bucket Name
                    </InputLabel>
                    <Select
                      labelId="bucket-label"
                      id="bucket"
                      value={bucket}
                      onChange={(event) => {
                        setBucket(event.target.value as string);
                      }}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            backgroundColor: "white",
                          },
                        },
                      }}
                    >
                      {bucketList.map((bucket) => (
                        <MenuItem key={bucket} value={bucket}>
                          {bucket}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}
            </>
          )}
          <TextField
            id="storage-name"
            label="Name of the Storage"
            variant="outlined"
            margin="normal"
            onChange={(event) => {
              setStorageName(event.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddStorage}
            disableElevation
          >
            Add
          </Button>
        </form>
      </Box>
    </Dialog>
  );
}
//   return (
//     <Dialog onClose={handleClose} open={open}>
//       <DialogTitle>Add Storage</DialogTitle>
//       <Box bgcolor="background.default">
//         <Select
//           labelId="storage-type-select-label"
//           id="storage-type-select"
//           value={selectedStorageType}
//           label="Storage Type"
//           onChange={(event) => setSelectedStorageType(event.target.value)}
//         >
//           {Object.keys(StorageType)
//             .filter((key) => isNaN(Number(key)))
//             .map((storageType) => (
//               <MenuItem value={10}>{storageType}</MenuItem>
//             ))}
//         </Select>
//       </Box>
//     </Dialog>
//   );
// }
