/*
Треба зробити функціональнку компоненту, яка рендерить невеликий div 200 X 200
рендерить там текст, але текст, який ця компонента має рендерить, 
вона отримує через пропси
*/
import React from "react";

function Indicator(props) {
  return <div className="small-div">{props.text}</div>;
}

export default Indicator;
