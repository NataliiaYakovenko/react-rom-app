import React from "react";

function App() {
  return (
    <>
    <button onClick={() => {window.location.assign('https://unsplash.com/s/photos/dogs')}}> Assign</button>
    <button onClick={() => {window.location.reload()}}> Relosd</button>
    <button onClick={() => {window.location.replace('https://pixabay.com/images/search/cat/')}}> Replace</button>

    </>
  );
}

export default App;
