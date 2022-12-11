import React, { useContext } from "react";
import "./itemcard.css";
import { Button } from "react-bootstrap";
import Contex from "../Store/Contex";
import { Link } from "react-router-dom";
import axios from "axios";

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
    console.log(cartvalues.mail);
    async function addTocrud() {
      try {
        const res = await axios.post(
          `https://crudcrud.com/api/3dd42d67e3104dc68e4bd82bfc23b370/cart${cartvalues.mail}`,
          obj
        );
        console.log(res);
      } catch (err) {
        alert("Somthing went wrong");
      }
    }
    addTocrud();
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
