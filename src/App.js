import React from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <button
        onClick={() => {
          window.location.assign("https://unsplash.com/s/photos/dogs");
        }}
      >
        {" "}
        Assign
      </button>

      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        {" "}
        Relosd
      </button>
      <button
        onClick={() => {
          window.location.replace("https://pixabay.com/images/search/cat/");
        }}
      >
        {" "}
        Replace
      </button>

      <p>
        Dogs are considered by many to be man’s best friend, and a lot of us
        love to wonder about exactly what our loyal and energetic companions are
        thinking or what they would say to us if they were talking animals.
      </p>
      <button
        onClick={() => {
          window.navigator.clipboard.writeText(
            "Dogs are considered by many to be man’s best friend, and a lot of us love to wonder about exactly what our loyal and energetic companions are thinking or what they would say to us if they were talking animals."
          );
          toast.success("🦄 Wow so easy!");
        }}
      >
        Click to copy text
      </button>

      <button
        onClick={() => {
          window.navigator.clipboard.readText().then((text) => {
            console.log(text);
          });
        }}
      >
        Read text from buffer
      </button>

      <button
        onClick={() => {
          window.navigator.geolocation.getCurrentPosition((myPosition) => {
            console.log(myPosition);
          });
        }}
      >
        Get my current geopisition
      </button>
    </>
  );
}

export default App;
