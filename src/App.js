import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import Playlist from "./Playlist"
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { jammingTheme } from "./theme"
import { useEffect, useState } from "react"
import { searchApi } from "./api/client"
import { requestToken, spotifyAuthorization, getToken } from "./api/spotify/authorization"
import drumsImage from "./drums.png"
import Grid from "@mui/material/Unstable_Grid2" // Grid version 2
import LogInButton from "./LogInButton"

function App() {
  const [songs, setSongs] = useState([])
  const [playlist, setNewPlaylist] = useState([])

  const handleSearch = async (searchQuery) => {
    const tracks = await searchApi(searchQuery)
    const newSongs = tracks.items.map((trackItem) => ({
      title: trackItem.name,
      author: trackItem.artists.map((artist) => artist.name).join(", "),
      album: trackItem.album.name,
      id: trackItem.id,
    }))
    setSongs(newSongs)
  }

  const addSongToPlaylist = (id) => {
    const songToAdd = songs.find((song) => song.id === id)
    if (playlist.find((song) => song.id === id) === undefined) {
      setNewPlaylist((prev) => [songToAdd, ...prev])
    }
  }

  const removeSongsFromPlaylist = (id) => {
    setNewPlaylist((prev) => prev.filter((song) => song.id !== id))
  }

  const handleAuthorization = async () => {
    await spotifyAuthorization()
  }

  useEffect(() => {
    const authorizationFlow = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      let code = urlParams.get("code")

      if (code) {
        await requestToken(code)
        window.location.search = ""
      }
    }

    authorizationFlow()
  }, [])

  const isAuthorized = getToken() !== null

  const handlePlaylistCreated = () => {
    setNewPlaylist([])
  }

  return (
    <ThemeProvider theme={jammingTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${drumsImage})`,
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "#3d322f" }}>
            <Grid
              container
              spacing={2}
              sx={{
                minHeight: "60px",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Grid xsOffset={4} xs={4}>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    fontWeight: "800",
                    letterSpacing: "3px",
                  }}
                >
                  JAMMING
                </Typography>
              </Grid>
              <Grid xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <LogInButton isAuthorized={isAuthorized} handleAuthorization={handleAuthorization} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl">
          <SearchBar onSearch={handleSearch} />
          <Grid container>
            <Grid xs={6}>
              <SearchResults songs={songs} addSongToPlaylist={addSongToPlaylist} xs={{ opacity: "0.3" }} />
            </Grid>
            <Grid xsOffset={1} xs={5}>
              <Playlist
                playlist={playlist}
                onPlaylistCreated={handlePlaylistCreated}
                removeSongsFromPlaylist={removeSongsFromPlaylist}
                sx={{ opacity: "0.3" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
