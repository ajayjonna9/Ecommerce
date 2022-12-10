import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemImg from "./ItemImg";
import "./Item.css";
import ReactImageMagnify from "react-image-magnify";

const Item = () => {
  const { items: id } = useParams();
  console.log(useParams());
  const [imgArr, setImgArr] = useState([]);
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
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

  const setimageOnScreen = (img, ind, htyr, e) => {
    setImage(img);
    console.log(imgComponent);
    e.currentTarget.classList.add("imgclick");
    for (let i of imgComponent) {
      if (i.props.index !== ind) {
      }
    }
  };
  const imgComponent = imgArr.map((img, ind) => {
    return (
      <ItemImg
        img={img}
        setimage={setimageOnScreen}
        index={ind}
        imgarr={imgArr}
      />
    );
  });

  return (
    <div className="itemdetailsbody">
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
      </div>
    </div>
  );
};

export default Item;
