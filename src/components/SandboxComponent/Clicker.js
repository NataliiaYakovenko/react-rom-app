import React from "react";
import { useState, useCallback } from "react";

//Підрахувати кількість натиснень на кнопку

function Clicker() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // const clickHandler =()=>{
  //   setClickCount(clickCount + 1)
  // }

  const clickHandler = useCallback(() => {
    setClickCount((clickCount) => clickCount + 1);
  }, []);

  // const changeHandler =({target:{value,name}})=>{
  //   setInputValue(Number(value))
  // }

  const changeHandler = useCallback(({ target: { value} }) => {
    setInputValue(Number(value));
  }, []);

  //   const logValueHandler=()=>{
  // let sum = 0

  // for(let i = 0; i<inputValue; i++){
  //     sum += i
  // }
  //     console.log(sum)
  //     console.log(inputValue)
  //   }

  const logValueHandler = useCallback(() => {
    let sum = 0;

    for (let i = 0; i < inputValue; i++) {
      sum += i;
    }
    console.log(sum);
    console.log(inputValue);
  }, [inputValue]);

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
