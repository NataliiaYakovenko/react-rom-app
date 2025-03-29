import React from "react";
import PhonesLoader from "./components/PhonesLoader/PhonesLoader";
import TVLoader from "./components/TVLoader/TVLoader";
import DataProvider from "./components/DataProvider/DataProvider";


function App() {
  return (
    <>
 <DataProvider url='/phones.json'/>
 <DataProvider url='/tv.json'/>
    </>
  );
    
}

export default App;

