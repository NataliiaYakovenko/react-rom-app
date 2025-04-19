import React from "react";
import { useEffect, useRef } from "react";

function InputUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input type="text" placeholder="Enter text" ref={inputRef} />;
}

export default InputUseRef;
