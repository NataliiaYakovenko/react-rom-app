import React from "react";
import InnerChild from "./InnerChild/InnerChild";

const Child = (props) => {
  return (
    <div style={{ border: "2px solid black", padding: "25px", textAlign:'center'}}>
      Child
      <InnerChild />
    </div>
  );
}

export default Child;
