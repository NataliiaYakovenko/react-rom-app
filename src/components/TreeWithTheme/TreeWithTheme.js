import React from "react";
import Parent from "./Parent/Parent";
import styles from "./Tree.module.css";
import { ThemeContext } from "../context/ThemeContext";
import CONSTANTS from "../../constants";
import cx from "classnames";
const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const className = cx(styles.container, {
    [styles.lightTheme]: props.theme === THEMES.LIGHT,
    [styles.darkTheme]: props.theme === THEMES.DARK,
  });

  return (
    <div className={className}>
      Tree
      <Parent />
    </div>
  );
};

const TreeWithTheme = (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        return <Tree theme={theme} setTheme={setTheme} />;
      }}
    </ThemeContext.Consumer>
  );
};

export default TreeWithTheme;
