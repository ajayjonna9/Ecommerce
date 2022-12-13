import React, { useContext } from "react";
import axios from "axios";

async function AddToCrud(obj, mail) {
  try {
    const resdata = await axios.get(
      `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${mail}`
    );

    console.log("res", resdata.data);

    const indexOfItem = resdata.data.findIndex((preind) => {
      return obj.id === preind.id;
    });
    console.log(indexOfItem);
    if (indexOfItem >= 0) {
      const itemQuantity = resdata.data[indexOfItem].quantity + 1;
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
      const res = await axios.post(
        `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${mail}`,
        obj
      );
      console.log("post");
    }
  } catch (err) {
    alert("Somthing went wrong");
  }
}

export default AddToCrud;
