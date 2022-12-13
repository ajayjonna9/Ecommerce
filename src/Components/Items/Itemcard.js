import React, { useCallback, useContext } from "react";
import "./itemcard.css";
import { Button } from "react-bootstrap";
import Contex from "../Store/Contex";
import { Link } from "react-router-dom";
import Add from "../Crud/Add";

const Itemcard = (props) => {
  const cartvalues = useContext(Contex);
  const addToCart = useCallback(
    (e) => {
      e.preventDefault();
      const obj = {
        id: props.id,
        title: props.title,
        imgurl: props.imgurl,
        price: props.price,
        quantity: Number(1),
      };
      cartvalues.addItem(obj);
      Add(obj, cartvalues.mail);

      console.log(cartvalues.mail);
    },
    [props, cartvalues.mail]
  );
  return (
    <div className="itemcard ">
      <h4 className="itemtitle">{props.title}</h4>
      <Link to={"/store/" + props.id}>
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
