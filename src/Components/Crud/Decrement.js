import React from "react";
import axios from "axios";
import Remove from "./Remove";

async function Decrement(obj, mail) {
  try {
    const resdata = await axios.get(
      `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${mail}`
    );

    console.log("res", resdata.data);

    const indexOfItem = resdata.data.findIndex((preind) => {
      return obj.id === preind.id;
    });

    console.log(indexOfItem);

    const itemQuantity = resdata.data[indexOfItem].quantity - 1;
    if (itemQuantity > 0) {
      const idOfElement = resdata.data[indexOfItem]._id;
      const obj1 = {
        ...obj,
        quantity: itemQuantity,
      };
      console.log(obj1);

      const res = await axios.put(
        `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${mail}/${idOfElement}`,
        obj1
      );
      console.log("patch");
    } else {
      Remove(obj.id, mail);
    }
  } catch (err) {
    alert("Somthing went wrong");
  }
}

export default Decrement;
