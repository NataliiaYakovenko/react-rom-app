import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CLICK_INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "CLICK_DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    default: {
      return state;
    }
  }
}

const initialState = {
  count: 0,
};

function Clicker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandlerIncrement = () => {
    dispatch({
      type: "CLICK_INCREMENT",
    });
  };

  const clickHandlerDecrement = () => {
    dispatch({
      type: "CLICK_DECREMENT",
    });
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={clickHandlerIncrement}>+</button>
      <button onClick={clickHandlerDecrement}>-</button>
    </>
  );
}

export default Clicker;