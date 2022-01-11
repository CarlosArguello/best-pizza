import { createTheme } from '@mui/material';

export const BestPizzaThemeConfig = createTheme({
  palette: {
    primary: {
      light: '#bdbdbd',
      main: '#242424',
      dark: '#161616',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#fcd688',
      main: '#fbc455',
      dark: '#fabe4e',
      contrastText: '#000000',
    },
    grey: {
      main: '#9b9b9b',
    },
    text: {
      primary: '#000000',
      secondary: '#9b9b9b',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif', 'Arial'].join(','),
    h1: {
      fontWeight: 600,
      fontSize: '2.2rem',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontFamily: 'Montserrat',
          fontSize: '.9rem',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'medium',
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'inherit',
          fontSize: '.8rem',
          marginTop: '0.2rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '.95rem',
          height: 60,
        },
      },
    },
  },
});
