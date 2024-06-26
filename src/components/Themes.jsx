import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff',
        paper: '#f5f5f5',
      },
      text: {
        primary: '#000000',
        secondary: '#555555',
      },
    },
  });
  
 const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#1d1d1d',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#bbbbbb',
      },
    },
  });

  export {darkTheme, lightTheme}