/*
Задача: написати трекер положення миші на нашому екрані
 */

import React, { useState, useEffect } from "react";

function MouseTracker(props) {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", trackerHandler);

    return () => {
      window.removeEventListener("mousemove", trackerHandler);
    };
  }, []); //[] порожній масив залежностей - це componentDidMount

  const trackerHandler = (event) => {
    const { clientX, clientY } = event;

    setCoordinates({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <>
      <p>X {coordinates.x}</p>
      <p>Y {coordinates.y}</p>
    </>
  );
}

export default MouseTracker;
