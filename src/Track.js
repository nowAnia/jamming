import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

function Track({ title, author }) {
  return (
    <ListItem
      sx={{
        "&:hover": {
          bgcolor: "rgba(0, 0, 0, 0.05)",
        },
      }}
      secondaryAction={
        <IconButton aria-label="comment">
          <AddIcon />
        </IconButton>
      }
    >
      <ListItemText primary={title} secondary={author} />
    </ListItem>
  );
}

export default Track;
