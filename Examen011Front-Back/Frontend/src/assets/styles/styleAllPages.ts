import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3b1058',
        },
        secondary: {
          main: '#0075f5',
        },
      },
      typography: {
        fontFamily: 'Roboto',
      },
  });