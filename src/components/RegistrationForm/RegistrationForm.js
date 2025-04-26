import React from "react";
import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CLICK_INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "CLICK_DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    default: {
      return state;
    }
  }
}

const initialState = {
  count: 0,
};

function Clicker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandlerIncrement = () => {
    dispatch({
      type: "CLICK_INCREMENT",
    });
  };

  const clickHandlerDecrement = () => {
    dispatch({
      type: "CLICK_DECREMENT",
    });
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={clickHandlerIncrement}>+</button>
      <button onClick={clickHandlerDecrement}>-</button>
    </>
  );
}

export default Clicker;

// function RegistrationForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const changeHandler = ({ target: { value, name } }) => {
//     switch (name) {
//       case "firstName": {
//         setFirstName(value);
//         break;
//       }
//       case "lastName": {
//         setLastName(value);
//         break;
//       }
//       case "email": {
//         setEmail(value);
//         break;
//       }
//       case "password": {
//         setPassword(value);
//         break;
//       }
//       default: {
//         break;
//       }
//     }
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="Type your first name"
//         value={firstName}
//         onChange={changeHandler}
//       />
//       <input
//         type="text"
//         name="lastName"
//         placeholder="Type your last name"
//         value={lastName}
//         onChange={changeHandler}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="your@mail"
//         value={email}
//         onChange={changeHandler}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Your password"
//         value={password}
//         onChange={changeHandler}
//       />
//     </form>
//   );
// }

// export default RegistrationForm;
