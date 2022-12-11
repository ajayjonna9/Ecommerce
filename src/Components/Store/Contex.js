import React from "react";

const Contex = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},

  token: "",
  isLogin: false,
  login: (token, mail) => {},
  logout: () => {},
  mail: "",
  addcruditems: (item) => {},
});

export default Contex;
