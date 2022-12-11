import React from "react";

const Contex = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},

  token: "",
  isLoggin: false,
  login: (token) => {},
  logout: () => {},
});

export default Contex;
