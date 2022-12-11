import React, { useState } from "react";
import Login from "../LoginPage/Login";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const [cartValues, setCartValues] = useState([]);
  const [token, setToken] = useState(null);

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
  const Login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const Logout = () => {
    setToken(null);
  };
  const removeItemToCart = (id) => {};
  const contexValues = {
    items: cartValues,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
    token: token,
    isLogin: !!token,
    login: Login,
    logout: Logout,
  };
  return (
    <Contex.Provider value={contexValues}>{props.children}</Contex.Provider>
  );
};

export default ContexProvider;
