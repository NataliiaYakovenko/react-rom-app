import React from "react";
import Parent from "./Parent/Parent";
import styles from "./Tree.module.css";
import { ThemeContext } from "../context/ThemeContext";
import CONSTANTS from "../../constants";
import cx from 'classnames'
const {THEMES}= CONSTANTS

const Tree = (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
          const className = cx(styles.container, {
            [styles.lightTheme] : theme === THEMES.LIGHT,
            [styles.darkTheme] : theme === THEMES.DARK
          })

        return (
          <div className={className}>
            Tree
            <Parent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Tree;
