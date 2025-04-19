import React from "react";
import Child from "./Child/Child";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import CONSTANTS from "../../../../constants";
import { ThemeContext } from "../../../context/ThemeContext";
const { THEMES } = CONSTANTS;

const Subparent = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const {user: { firstName }} = useContext(UserContext);

  const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  return (
    <div>
      Subparent
      <p>{firstName}</p>
      <button onClick={() => setTheme(nextTheme)}>Click to change theme</button>
      <Child />
    </div>
  );
};

export default Subparent;
