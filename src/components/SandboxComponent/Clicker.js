import React from "react";
import { useState, useCallback } from "react";

//Підрахувати кількість натиснень на кнопку

function Clicker() {
  const [clickCount, setClickCount] = useState(0);

  // const clickHandler =()=>{
  //   setClickCount(clickCount + 1)
  // }

  const clickHandler = useCallback(() => {
    setClickCount((clickCount) => clickCount + 1);
  }, []);

  return (
    <>
      <h1>Click count: {clickCount}</h1>
      <button onClick={clickHandler}>Click</button>
    </>
  );
}

export default Clicker;
