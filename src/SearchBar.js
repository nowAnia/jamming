import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearchClick() {
    if (search.length > 0) {
      onSearch(search);
    }
  }

  function handleChange(event) {
    const newsearch = event.target.value;
    setSearch(newsearch);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "45px",
        paddingTop: "75px",
        paddingBottom: "30px",
      }}
    >
      <TextField
        onChange={handleChange}
        value={search}
        id="outlined-basic"
        label="Enter song.."
        variant="outlined"
      />
      <Button onClick={handleSearchClick} variant="contained">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
