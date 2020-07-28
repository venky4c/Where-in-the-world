import React from "react";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="{`${theme}-theme`}" id="header">
      <h1>Where in the world?</h1>
      <p>
        <i class="far fa-moon"></i>
        <Button className="button" id="button" onClick={toggleTheme}>
          {" "}
          Dark Mode
        </Button>
      </p>
    </div>
  );
}

export default Header;
