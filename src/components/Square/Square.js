import React from "react";
import { useState } from "react";

function Square() {
  const [number, setNumber] = useState(1);

  const changeHandler = ({ target: { value } }) => {
    setNumber(Number(value));
  };

  return (
    <>
      <h1>Number square</h1>
      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={changeHandler}
      />
      <p>Square:{number**2}</p>
    </>
  );
}

export default Square;
