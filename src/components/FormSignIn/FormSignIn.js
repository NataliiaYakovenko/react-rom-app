import React, { Component } from "react";
import * as yup from "yup";

const initialState = {
  email: "",
  password: "",
};

const SIGN_IN_SHEMA = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
});

class FormSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(SIGN_IN_SHEMA.isValidSync(this.state));
  };

  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={email}
          placeholder="your email"
          name="email"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={password}
          placeholder="your password"
          name="password"
          onChange={this.changeHandler}
        />

        <button>Sign In</button>
      </form>
    );
  }
}

export default FormSignIn;
