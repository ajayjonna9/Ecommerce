import React, { useState } from "react";
import Login from "../LoginPage/Login";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const localStorageToken = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [cartValues, setCartValues] = useState([]);
  const [token, setToken] = useState(localStorageToken);

  const addItemToCart = (item) => {
    setCartValues((pre) => {
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
  const addCrudItems = (item) => {
    item.forEach((element) => {
      addItemToCart(element);
    });
  };
  const Login = (token, mail) => {
    setToken(token);
    const RegEx = /^[a-z0-9]+$/i;
    let newMail = "";
    for (let i = 0; i < mail.length; i++) {
      if (RegEx.test(mail[i])) {
        newMail = newMail + mail[i];
      }
    }
    setEmail(newMail);

    localStorage.setItem("token", token);
  };
  const Logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setCartValues([]);
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
    mail: email,
    addcruditems: addCrudItems,
  };
  return (
    <Contex.Provider value={contexValues}>{props.children}</Contex.Provider>
  );
};

export default ContexProvider;
