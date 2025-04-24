import React from "react";
import { useState, useEffect } from "react";

const useData = (loadData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    loadData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {data,isLoading,isError}

};

export default useData;
