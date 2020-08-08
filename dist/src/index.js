import React from "react";
import ReactDOM from "react-dom";
import "../src/css/main.css";
import { Provider } from "react-redux";
import store from "./redux/index";
import App from "./App";
import { ThemeContextProvider } from "./themeContext";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";

ReactDOM.render(

    <ThemeContextProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeContextProvider>
  ,
  document.getElementById("root")
);
