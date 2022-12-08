import React, { useState } from "react";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const [cartValues, setCartValues] = useState([]);
  console.log("2");
  const addItemToCart = (item) => {
    console.log("0");
    setCartValues((pre) => {
      console.log("1");

      const indexOfItem = pre.findIndex((preind) => {
        return item.id === preind.id;
      });
      const element = pre[indexOfItem];

      if (element) {
        let newelement = {
          ...element,
          quantity: element.quantity + item.quantity,
        };
        pre[indexOfItem] = newelement;

        return [...pre];
      } else {
        return [...pre, item];
      }
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
