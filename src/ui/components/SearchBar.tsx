import React from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) {
  const handleSearch = (event: { target: { value: string } }) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      fullWidth
      onChange={handleSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
