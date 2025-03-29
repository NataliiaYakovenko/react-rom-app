import React from "react";
import PhonesLoader from "./components/PhonesLoader/PhonesLoader";
import TVLoader from "./components/TVLoader/TVLoader";
import DataProvider from "./components/DataProvider/DataProvider";

function App() {
  return (
    <>
      <DataProvider
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
      />
    </>
  );
}

export default App;
