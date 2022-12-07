import React, { useState } from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";
import Cartdetails from "./Cartdetails";
const Cart = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const onclickcart = (e) => {
    setCartOpen(true);
  };
  return (
    <>
      <Button className="cart" variant="outline-primary" onClick={onclickcart}>
        Cart
      </Button>

      <span className="cart_item_number">0</span>
      {isCartOpen && <Cartdetails oncartclose={setCartOpen} />}
    </>
  );
};

export default Cart;
