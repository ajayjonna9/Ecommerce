import React, { useContext, useState } from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";
import Cartdetails from "./Cartdetails";
import Contex from "../Store/Contex";

const Cart = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const cartvalues = useContext(Contex);
  const noOfItems = cartvalues.items.length;
  const onclickcart = (e) => {
    setCartOpen(true);
  };
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
