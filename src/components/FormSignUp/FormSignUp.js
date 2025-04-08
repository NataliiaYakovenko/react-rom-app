import React, { Component } from "react";
import SIGN_UP_SHEMA from "../../schemas";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

class FormSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      isError: null,
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    try {
      SIGN_UP_SHEMA.validateSync(this.state);

      this.setState({
        isError: null,
      });
    } catch (err) {
      this.setState({
        isError: err,
      });
    }
  };

  render() {
    const { email, password, firstName, lastName, isError } = this.state;
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

        {isError && (
          <p style={{ color: "red", fontSize: "20px" }}>{isError.message}</p>
        )}
      </form>
    );
  }
}

export default FormSignUp;

/*
Зробити компоненту входу
Провести валідацію з використанням Yup
*/
