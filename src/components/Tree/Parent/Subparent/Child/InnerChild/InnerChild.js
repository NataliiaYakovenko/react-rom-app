import React from "react";
import { UserContext } from "../../../../../context/UserContext";

const InnerChild = (props) => {
  const { user: { firstName, lastName, email, avatar } = {} } = props;

  return (
    <UserContext.Consumer>
      {({ firstName, lastName, email, avatar }) => {
        return (
          <div
            style={{
              border: "2px solid black",
              padding: "25px",
              textAlign: "center",
            }}
          >
            I'm InnerChild
            <p>
              {firstName} {lastName} {email}
            </p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default InnerChild;
