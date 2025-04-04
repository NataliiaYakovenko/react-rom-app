import React from "react";
import Parent from "./Parent/Parent";
import styles from "./Tree.module.css";
import CONSTANTS from "../../constants";
import cx from "classnames";
import { WithTheme } from "../../HOC/hoc";


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

// const TreeWithTheme = (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, setTheme }) => {
//         return <Tree theme={theme} setTheme={setTheme} />;
//       }}
//     </ThemeContext.Consumer>
//   );
// };



const newTree = WithTheme(Tree)


export default newTree;
