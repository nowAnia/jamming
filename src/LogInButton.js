import Chip from "@mui/material/Chip"
import FaceIcon from "@mui/icons-material/Face"

function LogInButton({ isAuthorized, handleAuthorization }) {
  const handleLogout = () => {
    localStorage.removeItem("access_token")
    window.location.reload()
  }

  return isAuthorized ? (
    <Chip
      icon={<FaceIcon />}
      onClick={handleLogout}
      label="Log out"
      variant="outlined"
      sx={{ color: "#ffffff", minWidth: "160px" }}
    />
  ) : (
    <Chip
      icon={<FaceIcon />}
      onClick={handleAuthorization}
      label="Authorize to Spotify"
      variant="outlined"
      sx={{ color: "#ffffff", minWidth: "160px" }}
    />
  )
}

export default LogInButton
