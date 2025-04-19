import React, { Component } from "react";
import Tree from "./components/TreeWithTheme/Tree";
import { ThemeContext } from "./components/context/ThemeContext";
import { UserContext } from "./components/context/UserContext";
import CONSTANTS from "./constants";
const { THEMES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "Nataliia",
        lastName: "Yakovenko",
        email: "yakovenkonatali999@gmail.com",
        avatar:
          "https://c8.alamy.com/comp/2PYYR60/business-woman-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-business-leader-vector-illustration-2PYYR60.jpg",
      },
    };
  }

  logOut = () => {
    this.setState({
      user: {},
    });
  };

  setTheme = (theme) => {
    this.setState({
      theme: theme,
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          setTheme: this.setTheme,
        }}
      >
        <UserContext.Provider
          value={{
            user: this.state.user,
            logOut: this.logOut,
          }}
        >
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
