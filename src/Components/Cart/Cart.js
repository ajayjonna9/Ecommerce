import React from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";
const Cart = () => {
  return (
    <>
      <Button className="cart" variant="outline-primary">
        Cart
      </Button>
      <span className="cart_item_number">0</span>
    </>
  );
};

export default Cart;
