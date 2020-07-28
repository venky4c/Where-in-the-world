import React from "react";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";

function Button(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`${theme}-theme`}>
      {theme === "light" ? "Dark Theme" : "Light Theme"}
    </button>
  );
}

export default Button;
