import React from "react";
import DataProvider from "./components/DataProvider/DataProvider";

function App() {
  return (
    <>
      <DataProvider loadData={() => {
          return fetch("./phones.json").then((response) => response.json());
        }}>

        {(state) => {
          const { data, isLoading, isError } = state;
          return (
            <div>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error...{isError.message}</div>}

              <ul>
                {data.map((data,index) => {
                  return (
                    <li key={index}>
                      Brand: {data.brand}--- Model: {data.model}--- Price:{" "}
                      {data.price}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
        
         </DataProvider>/

         <DataProvider loadData={() => {
          return fetch("./tv.json").then((response) => response.json());
        }}>

        {(state) => {
          const { data, isLoading, isError } = state;
          return (
            <div>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error...{isError.message}</div>}

              <ol>
                {data.map((data,index) => {
                  return (
                    <li key={index}>
                      Brand: {data.brand}--- Model: {data.model}--- Price:{" "}
                      {data.price}
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        }}
        
         </DataProvider>/
    </>
  );
}

export default App;

/*
 loadData={() => {
          return fetch("./phones.json").then((response) => response.json());
        }}

        renderData={(state) => {
          const { data, isLoading, isError } = state;
          return (
            <div>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error...{isError.message}</div>}

              <ul>
                {data.map((data) => {
                  return (
                    <li>
                      Brand: {data.brand}--- Model: {data.model}--- Price:{" "}
                      {data.price}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}

*/
