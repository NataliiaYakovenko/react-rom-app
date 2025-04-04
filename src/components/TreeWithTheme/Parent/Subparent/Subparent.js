import React from "react";
import Child from "./Child/Child";
import { WithTheme } from "../../../../HOC/hoc";
import CONSTANTS from "../../../../constants";
import { UserContext } from "../../../context/UserContext";
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

const SubparentWithThemeAndUser = (props) => {
  return (
    <UserContext.Consumer>
      {({ user, logOut }) => {
        const SubparentThemed = WithTheme(Subparent);
        return <SubparentThemed  user={user} logOut={logOut}/>;
      }}
    </UserContext.Consumer>
  );
};

export default SubparentWithThemeAndUser;
