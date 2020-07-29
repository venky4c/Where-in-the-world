import React from "react";
import ReactDOM from "react-dom";
import "../src/css/main.css";
import { Provider } from "react-redux";
import store from "./redux/index";
import App from "./App";
import { ThemeContextProvider } from "./themeContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContextProvider>
  </Router>,
  document.getElementById("root")
);
