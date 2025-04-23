import React from "react";
import { useState, useCallback, useMemo } from "react";

function Clicker() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const clickHandler = useCallback(() => {
    setClickCount((clickCount) => clickCount + 1);
  }, []);

  const changeHandler = useCallback(({ target: { value } }) => {
    setInputValue(Number(value));
  }, []);

  
    const logValueHandler=()=>{
  let sum = 0

  for(let i = 0; i<inputValue; i++){
      sum += i
  }
    return sum
    }

   const memoisedValue =  useMemo(()=>logValueHandler(),[inputValue])
   console.log(memoisedValue)


  return (
    <>
      <h1>Click count: {clickCount}</h1>
      <button onClick={clickHandler}>Click</button>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button onClick={logValueHandler}>Click to log inputValue</button>
    </>
  );
}

export default Clicker;
