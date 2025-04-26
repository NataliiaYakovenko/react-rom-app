import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INPUT_CHENGE": {
      const {payload:{value,name}} = action
      return {
        ...state,
        [name]: value
      }
    }
    default: return state
  }
}

const initialState={
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

function RegistrationForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {firstName,lastName,email,password} = state
   
  const universelChangeHandler =({target:{value,name}})=>{
   dispatch({
    type:"INPUT_CHENGE",
    payload: {
        value,
        name
    }
   })
  }





  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="Type your first name"
        value={firstName}
        onChange={universelChangeHandler}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Type your last name"
        value={lastName}
        onChange={universelChangeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="your@mail"
        value={email}
        onChange={universelChangeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Your password"
        value={password}
        onChange={universelChangeHandler}
      />
    </form>
  );
}

export default RegistrationForm;
