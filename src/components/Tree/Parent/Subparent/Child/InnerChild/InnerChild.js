import React from "react";

const InnerChild = (props) => {
  const {
    user: { firstName, lastName, email, avatar },
  } = props;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "25px",
        textAlign: "center",
      }}
    >
      I'm InnerChild
      <p>{firstName} {lastName} {email}</p>
    </div>
  );
};

export default InnerChild;
