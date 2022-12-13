import React, { useContext, useState, useCallback } from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";
import Cartdetails from "./Cartdetails";
import Contex from "../Store/Contex";
import CartOverlay from "./CartOverlay";

const Cart = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const cartvalues = useContext(Contex);
  let noOfItems = 0;
  cartvalues.items.forEach((item) => {
    noOfItems = noOfItems + item.quantity;
  });
  const onclickcart = useCallback(
    (e) => {
      setCartOpen(true);
      console.log(cartvalues.items);
    },
    [isCartOpen]
  );
  return (
    <>
      <Button className="cart" variant="outline-primary" onClick={onclickcart}>
        Cart
      </Button>

      <span className="cart_item_number">{noOfItems}</span>

      {isCartOpen && <Cartdetails oncartclose={setCartOpen} />}
    </>
  );
};

export default Cart;
