import React from "react";
import Child from "./Child/Child";

const Subparent = (props) => {
  return (
    <div style={{ border: "2px solid black", padding: "25px", textAlign:'center' }}>
      Subparent
      <Child  />
    </div>
  );
}

export default Subparent;
