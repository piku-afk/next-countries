import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useDark } from "./Layout";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2b3743'
    },
    secondary: {
      main: '#2b3743'
    },
    background: {
      paper: '#212e37'
    }
  }
});
const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      paper: '#f5f5f5',
    }
  }
});

export default function CustomTheme({children}) {
  const { dark } = useDark();


  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}