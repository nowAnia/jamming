import Paper from "@mui/material/Paper";
import Track from "./Track";
import { Box, Button, List, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import {
  addSongsToPlaylist,
  createPlaylist,
  getCurrentUser,
} from "./api/client";

function Playlist({ playlist }) {
  const [title, setTitle] = useState("");

  const handleChange = ({ target }) => {
    const newTitle = target.value;
    setTitle(newTitle);
  };

  const handleClick = async () => {
    if (title === "") {
      alert("Enter playlist's title");
      return;
    }
    if (playlist.length === 0) {
      alert("Add at least one song to playlist");
      return;
    }
    const tracksIds = playlist.map((song) => song.id);
    const currentUser = await getCurrentUser();
    const createdPlayList = await createPlaylist(currentUser.id, title);
    await addSongsToPlaylist(createdPlayList.id, tracksIds);
  };
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
          onChange={handleChange}
        />

        <List sx={{ width: "100%" }}>
          {playlist.map((song) => (
            <Track key={song.id} title={song.title} author={song.author} />
          ))}
        </List>
        <Button variant="contained" onClick={handleClick}>
          Save to Spotify
        </Button>
      </Box>
    </Paper>
  );
}

export default Playlist;
