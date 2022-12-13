import React, { useEffect, useState } from "react";

import Contex from "./Contex";
import axios from "axios";

const ContexProvider = (props) => {
  const localStorageToken = localStorage.getItem("token");
  const localStoragemail = localStorage.getItem("email");
  const [email, setEmail] = useState(localStoragemail);
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
    // addTocrud(item);
  };

  const addCrudItems = (item) => {
    item.forEach((element) => {
      addItemToCart(element);
    });
  };
  const Login = (token, mail) => {
    setToken(token);

    setEmail(mail);

    localStorage.setItem("token", token);
    localStorage.setItem("email", mail);
  };
  const Logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    setCartValues([]);
  };

  const removeItemToCart = (id) => {
    setCartValues((pre) => {
      const indexOfReducingElement = pre.findIndex((preitem) => {
        return preitem.id === id;
      });
      const reducingElement = pre[indexOfReducingElement];
      if (reducingElement.quantity > 1) {
        let updatedElement = {
          ...reducingElement,
          quantity: reducingElement.quantity - 1,
        };
        pre[indexOfReducingElement] = updatedElement;
        return [...pre];
      } else {
        const newpre = pre.filter((item) => {
          return item.id !== id;
        });
        pre = [...newpre];
        return [...pre];
      }
    });
  };
  const removeEntireItem = (id) => {
    setCartValues((pre) => {
      const newpre = pre.filter((item) => {
        return item.id !== id;
      });
      pre = [...newpre];
      return [...pre];
    });
  };
  useEffect(() => {
    async function getcartitems() {
      if (email) {
        try {
          console.log(email);
          const crudres = await axios.get(
            `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${email}`
          );
          console.log("crud", crudres);
          addCrudItems(crudres.data);
        } catch (err) {
          console.log(err);
        }
      }
    }
    getcartitems();
  }, []);
  const contexValues = {
    items: cartValues,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
    removeentireItem: removeEntireItem,
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
