import React, { useContext, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemImg from "./ItemImg";
import "./Item.css";
import ReactImageMagnify from "react-image-magnify";
import { Button } from "react-bootstrap";
import Add from "../Crud/Add";
import Contex from "../Store/Contex";
import Navbars from "../Header/Navbars";

const Item = () => {
  const { items: id } = useParams();
  const cartvalues = useContext(Contex);
  console.log(useParams());
  const [imgArr, setImgArr] = useState([]);
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const addToCart = useCallback(
    (e) => {
      e.preventDefault();
      const obj = {
        id: data.id,
        title: data.title,
        imgurl: data.thumbnail,
        price: data.price,
        quantity: Number(1),
      };
      cartvalues.addItem(obj);
      Add(obj, cartvalues.mail);

      console.log(cartvalues.mail);
    },
    [data, cartvalues.mail]
  );
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${Number(id)}`
        );
        console.log(res.data.images);
        setImgArr(res.data.images);
        setImage(res.data.images[0]);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const setimageOnScreen = (img, ind, e) => {
    setImage(img);
    console.log(imgComponent);
  };
  const imgComponent = imgArr.map((img, ind) => {
    return (
      <ItemImg
        img={img}
        key={ind}
        setimage={setimageOnScreen}
        index={ind}
        imgarr={imgArr}
      />
    );
  });

  return (
    <div className="itemdetailsbody">
      <Navbars />
      <div className="smallimg">
        <div className="d-flex flex-column ">{imgComponent}</div>
      </div>
      <div className="mainImg">
        {image && (
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",

                src: image,
                height: 300,
                width: 500,
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 2000,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "150%",
              },
            }}
          />
        )}
      </div>
      <div className="itemdes">
        <h3>{data.title}</h3>
        <h6 className="itemdescriptio">{data.description}</h6>
        <h4>$ {data.price}</h4>
        <h4>Rating {data.rating}</h4>
        <Button className="addtocart" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Item;
