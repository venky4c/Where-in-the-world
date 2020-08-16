import React from "react";
import ReactDOM from "react-dom";
import "../src/css/main.css";
import { Provider } from "react-redux";
import store from "./redux/index";
import { ThemeContextProvider } from "./themeContext";
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
