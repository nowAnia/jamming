import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import { Box, Button, Typography } from "@mui/material";
import { jammingTheme } from "./theme";
import { useEffect, useState } from "react";
import { searchApi } from "./api/client";
import {
  requestToken,
  spotifyAuthorization,
  getToken,
} from "./api/spotify/authorization";

function App() {
  const [songs, setSongs] = useState([]);
  const [playlist, setNewPlaylist] = useState([]);

  const handleSearch = async (searchQuery) => {
    const tracks = await searchApi(searchQuery);
    const newSongs = tracks.items.map((trackItem) => ({
      title: trackItem.name,
      author: trackItem.artists.map((artist) => artist.name).join(", "),
      album: trackItem.album.name,
      id: trackItem.id,
    }));
    setSongs(newSongs);
  };

  const addSongToPlaylist = (id) => {
    const songToAdd = songs.find((song) => song.id === id);
    if (playlist.find((song) => song.id === id) === undefined) {
      setNewPlaylist((prev) => [songToAdd, ...prev]);
    }
  };

  const handleAuthorization = async () => {
    await spotifyAuthorization();
  };

  useEffect(() => {
    const authorizationFlow = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      let code = urlParams.get("code");

      if (code) {
        await requestToken(code);
        window.location.search = "";
      }
    };

    authorizationFlow();
  }, []);

  const isAuthorized = getToken() !== null;

  return (
    <ThemeProvider theme={jammingTheme}>
      <CssBaseline />
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

        {!isAuthorized && (
          <Button onClick={handleAuthorization}>Authorize spotify</Button>
        )}
      </Box>
      <SearchBar onSearch={handleSearch} />
      <Box
        sx={{
          columnGap: "40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginRight: "75px",
        }}
      >
        <SearchResults songs={songs} addSongToPlaylist={addSongToPlaylist} />
        <Playlist playlist={playlist} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
