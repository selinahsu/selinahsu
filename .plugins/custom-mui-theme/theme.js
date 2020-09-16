import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#eb5729',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: '1em',
      lineHeight: '1.75em',
      textAlign: "left"
    },
    body2: {
      fontSize: '1em',
      lineHeight: '1.75em',
      textAlign: "center"
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        "& p": {
          color: "blue"
        },
        "& h2": {
          color: "red"
        }
      }
    }
  }
});