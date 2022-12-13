import React, { useCallback, useContext } from "react";
import { Card, Table, Button, CloseButton } from "react-bootstrap";
import "./Cartdetails.css";
import Contex from "../Store/Contex";
import axios from "axios";
import Decrement from "../Crud/Decrement";
import Remove from "../Crud/Remove";
import Add from "../Crud/Add";

const Cartitems = (props) => {
  const contextval = useContext(Contex);
  const onClickDec = useCallback(() => {
    contextval.removeItem(props.id);
    const obj = {
      id: props.id,
      title: props.title,
      imgurl: props.imgurl,
      price: props.price,
      quantity: Number(1),
    };
    Decrement(obj, contextval.mail);
  }, [props, contextval.mail]);
  const onClickRemove = useCallback(() => {
    contextval.removeentireItem(props.id);
    Remove(props.id, contextval.mail);
  }, [props, contextval.mail]);
  const onClickInc = useCallback(() => {
    const obj = {
      id: props.id,
      title: props.title,
      imgurl: props.imgurl,
      price: props.price,
      quantity: Number(1),
    };
    contextval.addItem(obj);
    Add(obj, contextval.mail);
  }, [props, contextval.mail]);

  return (
    <tr>
      <td>
        <img src={props.imgurl} alt="item" className="cart_image"></img>
        <span className="cart_item_title ">{props.title}</span>
      </td>

      <td>
        <h6 className="cartItemPrice">$ {props.price}</h6>
      </td>

      <td>
        <span className="cart_quantity">{props.quantity} </span>
        <button className="cart_inc_dec" onClick={onClickDec}>
          -
        </button>
        <button className="cart_inc_dec" onClick={onClickInc}>
          +
        </button>
        <Button variant="danger" className="removebtn" onClick={onClickRemove}>
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default Cartitems;
