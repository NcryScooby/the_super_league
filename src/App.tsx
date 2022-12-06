import GlobalStyles from "./styles/GlobalStyles";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cd3dc8",
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
