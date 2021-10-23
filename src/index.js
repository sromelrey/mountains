import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";
import store, { history } from "./store";
import "./index.scss";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
