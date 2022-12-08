import React from "react";

const Contex = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  it: [],
  he: "ndda",
});

export default Contex;
