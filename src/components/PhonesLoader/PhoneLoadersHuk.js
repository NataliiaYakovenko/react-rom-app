import React from "react";
import useData from "../DataProvider/UseData";

function PhoneLoadersHuk() {
  const { data: phones, isLoading, isError } = useData(getPhones);

  function getPhones() {
    return fetch("./phones.json").then((response) => {
      return response.json();
    });
  }

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...{isError.message}</div>}

      <ul>
        {phones.map((phone, index) => {
          return (
            <li key={index}>
              Brand: {phone.brand}--- Model: {phone.model}--- Price:{" "}
              {phone.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PhoneLoadersHuk;
