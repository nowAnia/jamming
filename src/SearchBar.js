import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import { useState } from "react"

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    if (search.length > 0) {
      onSearch(search)
    }
  }

  function handleChange(event) {
    const newsearch = event.target.value
    setSearch(newsearch)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "25px",
          paddingTop: "75px",
          marginBottom: "80px",
        }}
      >
        <TextField onChange={handleChange} value={search} id="outlined-basic" label="Enter song.." variant="outlined" />
        <Button
          type="submit"
          disabled={search.length === 0}
          variant="contained"
          sx={{
            color: "#fff",
            backgroundColor: "#745A4C",
            "&:hover": {
              backgroundColor: "#BFA89C",
              color: "#000000",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </form>
  )
}

export default SearchBar
