import { createTheme } from "@mui/material/styles"

export const jammingTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "rgba(255,255,255,0.6)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          paddingY: "20px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#000",
        },
        secondary: {
          color: "rgba(0, 0, 0, 0.7)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.8)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.05)",
          },
        },
      },
    },
  },
})
