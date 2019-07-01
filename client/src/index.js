import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { configStore, history } from "./configStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

const store = configStore();
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
