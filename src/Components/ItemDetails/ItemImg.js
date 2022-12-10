import React, { useState } from "react";
import "./ItemImg.css";

const ItemImg = (props) => {
  const [click, setclick] = useState([]);
  const onclickingImg = (e) => {
    props.setimage(props.img, props.index, setclick, e);
    setclick((pre) => {
      return [...pre, e];
    });
  };
  return (
    <div className={click && "imgclick"}>
      <img
        src={props.img}
        className="imagearr m-2"
        onClick={onclickingImg}
      ></img>
    </div>
  );
};

export default ItemImg;
