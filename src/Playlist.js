import Paper from "@mui/material/Paper";
import Track from "./Track";
import { Box, Button, List, TableRow, TextField } from "@mui/material";

function Playlist({ playlist }) {
  return (
    <Paper
      sx={{
        minWidth: "400px",
        minHeight: "400px",
      }}
    >
      <Box
        sx={{
          margin: 2,
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            maxWidth: "200px",
            display: "flex",
            justifyContent: "center",
            row: "gap",
          }}
          placeholder="New playlist name"
          id="standard-basic"
          label=""
          variant="standard"
        />

        <List sx={{ width: "100%" }}>
          {playlist.map((song) => (
            <Track key={song.id} title={song.title} author={song.author} />
          ))}
        </List>
        <Button variant="contained">Save to Spotify</Button>
      </Box>
    </Paper>
  );
}

export default Playlist;
