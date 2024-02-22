import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Track from "./Track";

function SearchResults() {
  const songs = [
    { title: "My Type", author: "Saint Motel", album: "łoo" },
    { title: "Notion", author: "The Rare Occasions", album: "jee" },
    { title: "Ride", author: "Twenty One Pilots", album: "hmmm" },
  ];
  return (
    <Paper elevation={3} sx={{ minWidth: "500px", minHeight: "400px" }}>
      <Box sx={{ margin: 2 }}>
        <List>
          {songs.map((song) => (
            <Track key={song.title} title={song.title} author={song.author} />
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default SearchResults;
