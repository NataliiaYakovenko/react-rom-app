/*
Потрібно створити Компоненту FlexContainer, яка відображає всі передані їй
елементи як flex-дітей
Прицьому flex-direction, aligne-items, justify-content вони мають передаватись 
цій компоненті як пропси

В середині загального index

<FlexContainer flexDirection='row', alignItems='center', justifyContent='stretch'>
 <div>Item1</div>
 <div>Item2</div>
 <div>Item3</div>
</FlexContainer>
*/
import React from "react";

const FlexContainer = ({ children, flexDirection, alignItems, justifyContent }) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection,
        alignItems,
        justifyContent
      }}
    >
      {children}
    </article>
  );
};

export default FlexContainer;
