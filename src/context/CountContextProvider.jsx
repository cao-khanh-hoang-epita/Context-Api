/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CountContext from "./CountContext";

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  const value = {
    count,
    incrementCount,
  };

  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
