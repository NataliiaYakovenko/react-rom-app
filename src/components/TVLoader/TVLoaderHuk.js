import React from "react";
import useData from "../DataProvider/UseData";

function TVLoaderHuk() {
  const { data: tv, isLoading, isError } = useData(getTV);

  function getTV() {
    return fetch("./tv.json").then((response) => {
      return response.json();
    });
  }

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...{isError.message}</div>}

      <ul>
        {tv.map((tv, index) => {
          return (
            <li key={index}>
              Brand: {tv.brand}--- Model: {tv.model}--- Price: {tv.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TVLoaderHuk;
