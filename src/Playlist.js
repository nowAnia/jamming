import Paper from "@mui/material/Paper"

import { Alert, Box, Button, List, Snackbar, TableRow, TextField } from "@mui/material"
import { useState } from "react"
import { addSongsToPlaylist, createPlaylist, getCurrentUser } from "./api/client"
import PlaylistTrack from "./PlaylistTrack"

function Playlist({ playlist, onPlaylistCreated, removeSongsFromPlaylist }) {
  const [title, setTitle] = useState("")
  const [open, setOpen] = useState(false)

  const handleChange = ({ target }) => {
    const newTitle = target.value
    setTitle(newTitle)
  }

  const handleClick = async () => {
    if (title === "") {
      alert("Enter playlist's title")
      return
    }
    if (playlist.length === 0) {
      alert("Add at least one song to playlist")
      return
    }
    const tracksIds = playlist.map((song) => song.id)
    const currentUser = await getCurrentUser()
    const createdPlayList = await createPlaylist(currentUser.id, title)
    await addSongsToPlaylist(createdPlayList.id, tracksIds)
    setTitle("")
    onPlaylistCreated()
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <Paper
      sx={{
        minWidth: "400px",
        minHeight: "400px",
        padding: 2,
      }}
    >
      <Box
        sx={{
          marginY: 2,
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            maxWidth: "200px",
          }}
          placeholder="New playlist name"
          id="standard-basic"
          label=""
          variant="standard"
          value={title}
          onChange={handleChange}
          inputProps={{
            sx: {
              color: "#000",
            },
          }}
        />

        <List sx={{ width: "100%" }}>
          {playlist.map((song) => (
            <PlaylistTrack
              key={song.id}
              songId={song.id}
              title={song.title}
              author={song.author}
              removeSongsFromPlaylist={removeSongsFromPlaylist}
            />
          ))}
        </List>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            color: "#fff",
            backgroundColor: "#745A4C",
            "&:hover": {
              backgroundColor: "#BFA89C",
              color: "#000000",
            },
          }}
        >
          Save to Spotify
        </Button>
      </Box>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
          Playlist saved in Spotify!
        </Alert>
      </Snackbar>
    </Paper>
  )
}

export default Playlist
