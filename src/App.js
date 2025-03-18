import React from "react";
import FlexContainer from "./components/FlexContainer/FlexContainer";

function App() {
  return (
    <FlexContainer
      flexDirection="row"
      alignItems="stretch"
      justifyContent="center"
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </FlexContainer>
  );
}
 
export default App;
