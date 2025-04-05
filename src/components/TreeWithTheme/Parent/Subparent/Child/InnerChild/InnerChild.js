import React from "react";
import { WithUser } from "../../../../../../HOC/hoc";

const InnerChild = (props) => {

  return (
    <div  >
      I'm InnerChild
      <button onClick={props.logOut}>Log out</button>
      <p>
        {props.user.firstName} {props.user.lastName} {props.user.email}
      </p>
    </div>
  );
};

export default WithUser(InnerChild);
