import GlobalStyles from "./styles/GlobalStyles";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer />
    </>
  );
};

export default App;
