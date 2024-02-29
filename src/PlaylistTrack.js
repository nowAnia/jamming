import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import IconButton from "@mui/material/IconButton"

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"

function PlaylistTrack({ title, author, songId, removeSongsFromPlaylist }) {
  const handleClick = () => {
    removeSongsFromPlaylist(songId)
  }
  return (
    <ListItem
      sx={{
        "&:hover": {
          bgcolor: "rgba(0, 0, 0, 0.05)",
        },
        color: "black",
      }}
      secondaryAction={
        <IconButton aria-label="comment" onClick={handleClick}>
          <HorizontalRuleIcon />
        </IconButton>
      }
    >
      <ListItemText sx={{ color: "#000" }} primary={title} secondary={author} />
    </ListItem>
  )
}

export default PlaylistTrack
