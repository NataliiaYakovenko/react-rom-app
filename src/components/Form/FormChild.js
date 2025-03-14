import React from "react";

class FormChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const{props:{sendUserNameToParent},state:{name}}=this
    sendUserNameToParent(name)
   //console.log(props,state);
  };

  changeHandler = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={this.changeHandler}
        />
        <button type="submit">Send my name</button>
      </form>
    );
  }
}
export default FormChild;
