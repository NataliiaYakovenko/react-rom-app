import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firstNameChangeHandler = ({ target: { value } }) => {
    setFirstName(value);
  };

  const lastNameChangeHandler = ({ target: { value } }) => {
    setLastName(value);
  };

  const emailChangeHandler = ({ target: { value } }) => {
    setEmail(value);
  };

  const passwordChangeHandler=({target:{value}})=>{
    setPassword(value)
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="Type your fierst name"
        value={firstName}
        onChange={firstNameChangeHandler}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Type your last name"
        value={lastName}
        onChange={lastNameChangeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="your@mail"
        value={email}
        onChange={emailChangeHandler}
      />
      <input
        type="password"
        name="passworde"
        placeholder="Your password"
        value={password}
        onChange={passwordChangeHandler}
      />
    </form>
  );
}

export default RegistrationForm;
