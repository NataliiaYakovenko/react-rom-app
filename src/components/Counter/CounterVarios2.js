import React from "react";
import { useState, useEffect } from "react";

function CounterVarios2() {
  const [count, setCount] = useState(0);

  useEffect(() => {                         // componentDidMount
    const intervalId = setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);

    return ()=>{                       // componentWillUnMount
         clearInterval(intervalId)
    }
  }, []);

  return <h1>{count}</h1>;
}

export default CounterVarios2;
