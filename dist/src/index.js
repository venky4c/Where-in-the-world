import React from "react";
import ReactDOM from "react-dom";
import "../src/css/main.css";
import { Provider } from "react-redux";
import store from "./redux/index";
import App from "./App";
import { ThemeContextProvider } from "./themeContext";

ReactDOM.render(
  <ThemeContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
