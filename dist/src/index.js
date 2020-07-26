import React from "react";
import ReactDOM from "react-dom";
import "../src/css/main.css";
import { Provider } from "react-redux";
import store from "./redux/index";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
