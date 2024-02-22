import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

import { Box, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          minHeight: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
          }}
        >
          JAMMING
        </Typography>
      </Box>
      <SearchBar />
      <Box
        sx={{
          columnGap: "40px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginRight: "75px",
        }}
      >
        <SearchResults />
        <Playlist />
      </Box>
    </>
  );
}

export default App;
