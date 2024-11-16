import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GloabalStyle.js";
import { ThemeProvider } from "styled-components";
import Page from "../Page/index.js";
import theme from "./style/theme.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Page />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
