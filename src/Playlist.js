import Paper from "@mui/material/Paper";
import Track from "./Track";
import { Box, List } from "@mui/material";

function Playlist() {
  return (
    <Paper sx={{ minWidth: "400px", minHeight: "400px" }}>
      <Box sx={{ margin: 2 }}>
        <List>
          {[1, 2, 3].map((value) => (
            <Track key={value} title={value} />
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default Playlist;
