import React, { Component } from "react";
import FormSignIn from "./components/FormSignIn/FormSignIn";
import FormSignUp from "./components/FormSignUp/FormSignUp";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <FormSignIn />;
  }
}

export default App;
