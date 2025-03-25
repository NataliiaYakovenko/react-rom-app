import React from "react";

function App() {
  return (
    <>
    <button onClick={() => {window.close()}}> Close page</button>
    <button onClick={()=>{ window.open('https://unsplash.com/s/photos/dogs')}}>Open page</button>
    </>
  );
}

export default App;
