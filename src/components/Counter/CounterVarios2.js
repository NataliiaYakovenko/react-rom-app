import React from "react";
import { useState, useEffect } from "react";
import { format, addSeconds } from "date-fns";

function CounterVarios2() {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0)); // абстрактна нульова дата
  const [isRunning, setIsRunning] = useState(true);


  useEffect(() => {
    if (isRunning === true) {
      const intervalId = setInterval(() => {
        // componentDidMount
        setTime((time) => {
          return addSeconds(time, 1);
        });
      }, 1000);

      return () => {
        clearInterval(intervalId); // componentWillUnMount
      };
    }
  }, [isRunning]);

  const switchRunning = () => {
    setIsRunning(!isRunning);
  };

  const clearHandler = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <>
      <h1>{format(time, "HH:mm:ss")}</h1>
      <button onClick={switchRunning}>{isRunning ? "Stop" : "Start"}</button>
      <button disabled={isRunning ? true : false} onClick={clearHandler}>
        Clear
      </button>
    </>
  );
}

export default CounterVarios2;
