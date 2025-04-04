import React from "react";
import Child from "./Child/Child";
import { ThemeContext } from "../../../context/ThemeContext";
import CONSTANTS from "../../../../constants";
import { UserContext } from "../../../context/UserContext";
const { THEMES } = CONSTANTS;

const Subparent = (props) => {
  return (
    <UserContext.Consumer>
      {({ user, logOut }) => {
        return (
          <ThemeContext.Consumer>
            {({ theme, setTheme }) => {
              return <SubparentWithTheme theme={theme} setTheme={setTheme} />;
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};



const SubparentWithTheme = (props) => {
  const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  return (
    <div>
      Subparent
      {/* <p>{user.firstName}</p> */}
      <button onClick={() => props.setTheme(nextTheme)}>
        Click to change theme
      </button>
      <Child />
    </div>
  );
};

export default Subparent;
