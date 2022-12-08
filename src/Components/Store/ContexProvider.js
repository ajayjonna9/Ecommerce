import React, { useState } from "react";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const [cartValues, setCartValues] = useState([]);
  console.log("contexprovider");

  const addItemToCart = (item) => {
    console.log("hello");
    setCartValues((pre) => {
      console.log(item);
      return [...pre, item];
    });
  };
  const removeItemToCart = (id) => {};
  const contexValues = {
    items: cartValues,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <Contex.Provider value={contexValues}>{props.children}</Contex.Provider>
  );
};

export default ContexProvider;
