import React from "react";
import { UserContext } from "../../../../../context/UserContext";
import { useContext } from "react";

const InnerChild = (props) => {
  const {
    logOut, user: { firstName, lastName, email },
  } = useContext(UserContext);
console.log(logOut);

  return (
    <div>
      I'm InnerChild
      <button onClick={logOut}>Log out</button>
      <p>
        {firstName} {lastName} {email}
      </p>
    </div>
  );
};

export default InnerChild;
