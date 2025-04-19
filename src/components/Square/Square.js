import React from "react";
import { useState, useRef } from "react";

function Square() {
  const [number, setNumber] = useState(1);
  const refContainer = useRef(null);
  console.log(refContainer);

  const changeHandler = ({ target: { value } }) => {
    setNumber(Number(value));
    const { current } = refContainer;

    if (value >= 1 && value <= 10) {
      current.style.backgroundColor = "green";
    } else if (value >= 11 && value <= 30) {
      current.style.backgroundColor = "yellow";
    } else if (value > 31) {
      current.style.backgroundColor = "red";
      current.style.color = "white";
    }else if (value < 1) {
        current.style.backgroundColor = "pink";
        current.style.color = "white";
      }
  };

  return (
    <>
      <h1>Number square</h1>
      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={changeHandler}
        ref={refContainer}
      />
      <p>Square:{number ** 2}</p>
    </>
  );
}

export default Square;

/*
Якщо користувач вводит число до 10 включно, 
тоді інпут повинен бути зеленого кольору

Якщо користувач вводит число від 11 до 30 включно, 
тоді інпут повинен бути жовтого кольору

Якщо користувач вводит число від 31, 
тоді інпут повинен бути червоного кольору, а колір тексту білий

Якщо користувач вводит від'ємне число, 
тоді інпут повинен бути рожевого кольору, а колір тексту білий
*/
