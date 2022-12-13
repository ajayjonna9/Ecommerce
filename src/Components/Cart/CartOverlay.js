import React from "react";
import Cartdetails from "./Cartdetails";
import ReactDOM from "react-dom";

const CartOverlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Cartdetails>{props.children}</Cartdetails>,
        document.getElementById("cart")
      )}
    </>
  );
};

export default CartOverlay;
