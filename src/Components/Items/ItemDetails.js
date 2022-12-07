import React from "react";
import ItemArr from "./ItemDetailsArr";
import Itemcard from "./Itemcard";
import "./itemdetails.css";

const ItemDetails = () => {
  const itemdetails = ItemArr.map((item) => {
    return (
      <Itemcard
        title={item.title}
        price={item.price}
        imgurl={item.imageUrl}
      ></Itemcard>
    );
  });
  return (
    <div className="itemdetails">
      <h1 className="itemheading">MUSIC</h1>
      <div className="container">
        <div className="row row-cols-2 ">
          {ItemArr.map((item) => {
            return (
              <Itemcard
                className="col "
                title={item.title}
                price={item.price}
                imgurl={item.imageUrl}
              ></Itemcard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
