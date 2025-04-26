import React from "react";
import { useReducer } from "react";
import registrationReducer from "../../reducers/registrationReducer";
import CONSTANTS from "../../constants";

const { ACTIONS } = CONSTANTS;

const initialState = {
  email: "",
  password: "",
};

function LogInForm() {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  const { email, password } = state;

  const universalChangeHandler = ({ target: { value, name } }) => {
    dispatch({
      type: ACTIONS.INPUT_CHENGE,
      payload: {
        value,
        name,
      },
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="your@mail"
        name="email"
        value={email}
        onChange={universalChangeHandler}
      />

      <input
        type="password"
        placeholder="your password"
        name="password"
        value={password}
        onChange={universalChangeHandler}
      />

      <button type="submit">LogIn</button>
    </form>
  );
}

export default LogInForm;
