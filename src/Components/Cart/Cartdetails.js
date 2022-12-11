import React, { useContext } from "react";
import { Card, Table, Button, CloseButton } from "react-bootstrap";
import "./Cartdetails.css";
import Contex from "../Store/Contex";
const Cartdetails = (props) => {
  const contextval = useContext(Contex);

  const onCartClose = (e) => {
    props.oncartclose(false);
  };
  let total = 0;
  contextval.items.forEach((element) => {
    total = total + Number(element.price) * Number(element.quantity);
    console.log(total);
  });

  return (
    <Card className="cart_card">
      <CloseButton className="cart_close" onClick={onCartClose} />
      <h2 className="cart_heading">Cart</h2>
      <Card.Body className="card_body">
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {contextval.items.map((item) => {
              return (
                <tr>
                  <th>
                    <img
                      src={item.imgurl}
                      alt="item"
                      className="cart_image"
                    ></img>
                    <span className="cart_item_title ">{item.title}</span>
                  </th>
                  <th>{item.price}</th>
                  <th>
                    <span className="cart_quantity">{item.quantity} </span>
                    <Button variant="danger">Remove</Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>

      <h5 className="carttotal">Total</h5>
      <h5 className="carttotalnumber">$ {total}</h5>
      <Button className="purchase_btn">Purchase</Button>
    </Card>
  );
};

export default Cartdetails;
