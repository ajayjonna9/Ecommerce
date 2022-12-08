import React from "react";
import ItemArr from "./ItemDetailsArr";
import Itemcard from "./Itemcard";
import "./itemdetails.css";

const ItemDetails = () => {
  return (
    <div className="itemdetails">
      <h1 className="itemheading">MUSIC</h1>
      <div className="container">
        <div className="row row-cols-2 ">
          {ItemArr.map((item) => {
            return (
              <Itemcard
                className="col"
                key={item.id}
                id={item.id}
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
