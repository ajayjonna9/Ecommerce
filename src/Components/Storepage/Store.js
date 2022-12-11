import React from "react";
import ItemDetails from "../Items/ItemDetails";
import Header from "../Header/Header";
import ContexProvider from "../Store/ContexProvider";

const Store = () => {
  return (
    <>
      <Header />

      <ItemDetails />
    </>
  );
};

export default Store;
