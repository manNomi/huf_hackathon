import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GloabalStyle.js";
import Page from "../Page/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Page />
    </BrowserRouter>
  );
};

export default App;
