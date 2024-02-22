import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function SearchBar() {
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
      <TextField id="outlined-basic" label="Enter song.." variant="outlined" />
      <Button variant="contained">Search</Button>
    </Box>
  );
}

export default SearchBar;
