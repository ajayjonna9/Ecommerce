import React, { useContext } from "react";
import "./itemcard.css";
import { Button } from "react-bootstrap";
import Contex from "../Store/Contex";

const Itemcard = (props) => {
  const cartvalues = useContext(Contex);
  const addToCart = (e) => {
    const obj = {
      title: props.title,
      imgurl: props.imgurl,
      price: props.price,
      quantity: 1,
    };
    cartvalues.addItem(obj);
    console.log(obj);
    console.log(cartvalues.items);
  };
  return (
    <div className="itemcard ">
      <h4 className="itemtitle">{props.title}</h4>
      <div className="itemimg">
        <img src={props.imgurl} className=" m-auto" alt={props.title}></img>
      </div>
      <p className="itemprice">
        ${props.price}{" "}
        <Button className="add_to_cart" onClick={addToCart}>
          Add to Cart
        </Button>
      </p>
    </div>
  );
};

export default Itemcard;
