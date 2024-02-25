import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Track from "./Track";

function SearchResults({ songs, addSongToPlaylist }) {
  return (
    <Paper elevation={3} sx={{ minWidth: "500px", minHeight: "400px" }}>
      <Box sx={{ margin: 2 }}>
        <List>
          {songs.map((song) => (
            <Track
              addSongToPlaylist={addSongToPlaylist}
              key={song.id}
              songId={song.id}
              title={song.title}
              author={song.author}
            />
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default SearchResults;
