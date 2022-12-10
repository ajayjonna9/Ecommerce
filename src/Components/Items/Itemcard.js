import React, { useContext } from "react";
import "./itemcard.css";
import { Button } from "react-bootstrap";
import Contex from "../Store/Contex";
import { Link } from "react-router-dom";

const Itemcard = (props) => {
  const cartvalues = useContext(Contex);
  const addToCart = (e) => {
    e.preventDefault();
    const obj = {
      id: props.id,
      title: props.title,
      imgurl: props.imgurl,
      price: props.price,
      quantity: Number(1),
    };
    cartvalues.addItem(obj);
  };
  return (
    <div className="itemcard ">
      <h4 className="itemtitle">{props.title}</h4>
      <Link to={"/" + props.id}>
        <div className="itemimg">
          <img src={props.imgurl} className=" m-auto" alt={props.title}></img>
        </div>
      </Link>
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
