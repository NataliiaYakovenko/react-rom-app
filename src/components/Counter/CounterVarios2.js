import React from "react";
import { useState, useEffect } from "react";

function CounterVarios2() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true)


  useEffect(() => {                        
 if(isRunning === true){
    const intervalId = setInterval(() => {     // componentDidMount
        setCount((count) => {
          return count + 1;
        });
      }, 1000);
  
      return ()=>{                       
           clearInterval(intervalId)   // componentWillUnMount
      }
 }
  }, [isRunning]);

 const switchRunning = ()=>{
    setIsRunning(!isRunning)
 }


  return <>
  <h1>{count}</h1>
  <button onClick={switchRunning}>{isRunning ? 'Stop' : "Start"}</button>


  </>
}

export default CounterVarios2;
