import React from "react";
import { UserContext } from "../../../../../context/UserContext";

const InnerChild = (props) => {
  const { user: { firstName, lastName, email, avatar } = {} } = props;

  return (
    <UserContext.Consumer>
      {({ user,logOut }) => {
        return (
          <div  >
            I'm InnerChild
            <button onClick={logOut}>Log out</button>
            <p>
              {user.firstName} {user.lastName} {user.email}
            </p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default InnerChild;
