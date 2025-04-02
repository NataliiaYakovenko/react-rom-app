import React from "react";
import Child from "./Child/Child";
import { ThemeContext } from "../../../context/ThemeContext";
import CONSTANTS from "../../../../constants";
const { THEMES } = CONSTANTS;

const Subparent = (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        return (
          <div>
            Subparent
            <button onClick={() => setTheme(nextTheme)}>Click to change theme</button>
            <Child />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Subparent;
