import React, { useEffect, useState } from "react";
import ItemArr from "./ItemDetailsArr";
import Itemcard from "./Itemcard";
import "./itemdetails.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const [itemArr, setItemArr] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://dummyjson.com/products/?limit=10");
        console.log(res.data.products);
        setItemArr(res.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="itemdetails">
      <h1 className="itemheading">MOBILE PHONES</h1>
      <div className="container">
        <div className="row row-cols-2 gx-4 gy-4 ">
          {itemArr.map((item) => {
            return (
              <Itemcard
                className="col"
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                imgurl={item.thumbnail}
              ></Itemcard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
