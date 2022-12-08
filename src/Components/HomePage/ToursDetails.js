import React from "react";
import { Button } from "react-bootstrap";
import "./ToursDetails.css";

const ToursDetails = (props) => {
  return (
    <div className="d-flex flex-row tourdetails">
      <h5 className=" toursdate">{props.date}</h5>
      <div className=" tourscity">{props.city}</div>
      <div className=" toursplace">{props.place}</div>
      <Button className="buytickets">BUY TICKETS</Button>
    </div>
  );
};

export default ToursDetails;
