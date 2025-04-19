import React from "react";
import { useContext } from "react";
import Parent from "./Parent/Parent";
import styles from "./Tree.module.css";
import CONSTANTS from "../../constants";
import cx from "classnames";
import { ThemeContext } from "../context/ThemeContext";



const { THEMES } = CONSTANTS;

const Tree = () => {
  const {theme} = useContext(ThemeContext)

  const className = cx(styles.container, {
    [styles.lightTheme]: theme === THEMES.LIGHT,
    [styles.darkTheme]: theme === THEMES.DARK,
  });

  return (
    <div className={className}>
      Tree
      <Parent />
    </div>
  );
};







export default Tree;
