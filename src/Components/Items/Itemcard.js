import React from "react";
import "./itemcard.css";
import { Button } from "react-bootstrap";
const Itemcard = (props) => {
  return (
    <div className="itemcard ">
      <h4 className="itemtitle">{props.title}</h4>
      <div className="itemimg">
        <img src={props.imgurl} className=" m-auto"></img>
      </div>
      <p className="itemprice">
        ${props.price} <Button className="add_to_cart">Add to Cart</Button>
      </p>
    </div>
  );
};

export default Itemcard;
