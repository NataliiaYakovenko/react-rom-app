/*
Задача: написати трекер положення миші на нашому екрані
 */

import React, { useState, useEffect } from "react";

function MouseTracker(props) {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    counter: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", trackerHandler);

    return () => {
      window.removeEventListener("mousemove", trackerHandler);
    };
  }, []); //[] порожній масив залежностей - це componentDidMount

  const trackerHandler = (event) => {
    const { clientX, clientY } = event;

    setCoordinates((prevState) => {
      return {
        ...prevState,
        x: clientX,
        y: clientY,
      };
    });
  };

  const clickHandler = () => {
    setCoordinates((prevState) => {
      return {
        ...prevState,
        counter: coordinates.counter + 1,
      };
    });
  };

  return (
    <>
      <p>X {coordinates.x}</p>
      <p>Y {coordinates.y}</p>
      <button onClick={clickHandler}>Click me</button>
      <p>Counter:{coordinates.counter}</p>
    </>
  );
}

export default MouseTracker;
