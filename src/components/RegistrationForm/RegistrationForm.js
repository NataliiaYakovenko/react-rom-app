import React from "react";
import { useReducer } from "react";
import registrationReducer from "../../reducers/registrationReducer";
import CONSTANTS from "../../constants";

const{ACTIONS}= CONSTANTS


const initialState={
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

function RegistrationForm() {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  const {firstName,lastName,email,password} = state
   
  const universelChangeHandler =({target:{value,name}})=>{
   dispatch({
    type:ACTIONS.INPUT_CHENGE,
    payload: {
        value,
        name
    }
   })
  }

  const submitHandler=(event)=>{
   event.preventDefault()
   console.log(state);
  }



  return (
    <form onSubmit={submitHandler}>
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

      <button type='submit' >Submit</button>
    </form>
  );
}

export default RegistrationForm;
