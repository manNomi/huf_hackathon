import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GloabalStyle.js";
import Page from "../pages/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Page />
    </BrowserRouter>
  );
};

export default App;
