import React from "react";
import { Card, Table, Button, CloseButton } from "react-bootstrap";
import "./Cartdetails.css";
const Cartdetails = (props) => {
  const onCartClose = (e) => {
    props.oncartclose(false);
  };
  const arr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  return (
    <Card className="cart_card">
      <CloseButton className="cart_close" onClick={onCartClose} />
      <h2 className="cart_heading">Cart</h2>
      <Card.Body>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item) => {
              return (
                <tr>
                  <th>
                    <img
                      src={item.imageUrl}
                      alt="item"
                      className="cart_image"
                    ></img>
                    <span className="cart_item_title ">{item.title}</span>
                  </th>
                  <th>{item.price}</th>
                  <th>
                    <span>{item.quantity} </span>
                    <Button variant="danger">Remove</Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button className="purchase_btn">Purchase</Button>
      </Card.Body>
    </Card>
  );
};

export default Cartdetails;
