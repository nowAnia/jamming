import List from "@mui/material/List"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import SearchTrack from "./SearchTrack"

function SearchResults({ songs, addSongToPlaylist }) {
  return (
    <Paper elevation={3} sx={{ minWidth: "500px", minHeight: "400px", padding: 2 }}>
      <Box sx={{ margin: 2 }}>
        <List>
          {songs.map((song) => (
            <SearchTrack
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
  )
}

export default SearchResults
