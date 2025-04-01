import React from "react";
import Subparent from "./Subparent/Subparent";

const Parent = (props) => {
  return (
    <div style={{ border: "2px solid black", padding: "25px", textAlign:'center' }}>
      Parent
      <Subparent  />
    </div>
  );
}
export default Parent;
