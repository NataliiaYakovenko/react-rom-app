import React, { Component } from "react";
import * as yup from "yup";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SIGN_UP_SHEMA = yup.object({
  firstName: yup.string().required().min(1).max(50),
  lastName: yup.string().required().min(1).max(50),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
});

class FormSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(SIGN_UP_SHEMA.isValidSync(this.state));
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          name="firstName"
          onChange={this.changeHandler}
        />

        <input
          type="text"
          value={lastName}
          placeholder="Last name"
          name="lastName"
          onChange={this.changeHandler}
        />

        <input
          type="text"
          value={email}
          placeholder="Your login"
          name="email"
          onChange={this.changeHandler}
        />

        <input
          type="text"
          value={password}
          placeholder="Your password"
          name="password"
          onChange={this.changeHandler}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default FormSignUp;
