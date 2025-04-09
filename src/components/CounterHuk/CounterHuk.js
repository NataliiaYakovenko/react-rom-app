import React, { Component } from "react";

class CounterHuk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementHandler=()=>{
    const {counter}= this.state
    this.setState({
        counter: counter+1
    })
  }

  decrementHandler=()=>{
    const {counter}= this.state
    this.setState({
        counter: counter-1
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementHandler}>+</button>
        <button onClick={this.decrementHandler}>-</button>
      </>
    );
  }
}

export default CounterHuk;
