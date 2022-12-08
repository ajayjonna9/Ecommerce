import React from "react";
import ToursData from "./ToursData";
import ToursDetails from "./ToursDetails";
import "./Tours.css";
import { Table } from "react-bootstrap";
const Tours = () => {
  return (
    <div className="tours">
      <h3 className="toursheader">Tours</h3>
      {ToursData.map((item) => {
        return (
          <ToursDetails date={item.date} city={item.city} place={item.place} />
        );
      })}
    </div>
  );
};

export default Tours;
