import React from "react";
import Header from "../Header/Header";
import Tours from "./Tours";
import Navbars from "../Header/Navbars";
import Homeheading from "./Homeheading";
import Footer from "../About/Footer";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Homeheading />
      <Tours />
      <Footer />
    </div>
  );
};

export default Home;
