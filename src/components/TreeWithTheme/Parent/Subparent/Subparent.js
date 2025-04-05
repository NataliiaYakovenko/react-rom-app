import React from "react";
import Child from "./Child/Child";
import { WithTheme, WithUser } from "../../../../HOC/hoc";
import CONSTANTS from "../../../../constants";
const { THEMES } = CONSTANTS;

const Subparent = (props) => {
  const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  return (
    <div>
      Subparent
      <p>{props.user.firstName}</p>
      <button onClick={() => props.setTheme(nextTheme)}>
        Click to change theme
      </button>
      <Child />
    </div>
  );
};



const SubparentWithTheme = WithTheme(Subparent)

const newUser = WithUser(SubparentWithTheme)

export default newUser
