import React, { Component } from "react";
import Tree from "./components/Tree/Tree";
import { UserContext } from "./components/context/UserContext";

class App extends React.Component {
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

  render() {
    console.log(UserContext);
    return <UserContext.Provider value={this.state.user}>
      <Tree/>
    </UserContext.Provider>;
  }
}

export default App;
