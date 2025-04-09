import React, { Component } from "react";
import CounterHuk from "./components/CounterHuk/CounterHuk";
import CounterHukFunctionComponent from "./components/CounterHuk/CounterHukFunctionComponent";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <CounterHukFunctionComponent />;
  }
}

export default App;
