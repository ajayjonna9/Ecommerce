import React from "react";
import axios from "axios";

async function Remove(id, mail) {
  try {
    const resdata = await axios.get(
      `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${mail}`
    );
    const indexOfItem = resdata.data.findIndex((preind) => {
      return id === preind.id;
    });
    const idOfElement = resdata.data[indexOfItem]._id;
    const res = await axios.delete(
      `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${mail}/${idOfElement}`
    );

    console.log(res);
  } catch (err) {
    alert("Somthing went wrong");
  }
}

export default Remove;
