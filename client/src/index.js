import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { configStore, history } from "./configStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import RootModal from './modals/RootModal';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-family: Gisha;
    background: #f0f0f0;
  }
`;
const store = configStore();

//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

export default store;
