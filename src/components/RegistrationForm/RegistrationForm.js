import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = ({ target: { value, name } }) => {
    switch (name) {
      case "firstName": {
        setFirstName(value);
        break;
      }
      case "lastName": {
        setLastName(value);
        break;
      }
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="Type your first name"
        value={firstName}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Type your last name"
        value={lastName}
        onChange={changeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="your@mail"
        value={email}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Your password"
        value={password}
        onChange={changeHandler}
      />
    </form>
  );
}

export default RegistrationForm;
