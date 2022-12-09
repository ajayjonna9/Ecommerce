import React from "react";
import "./NavbarComponents.css";
import Headerheading from "./Headerheading";
import Cart from "../Cart/Cart";
import Navbars from "./Navbars";
const Header = () => {
  return (
    <div>
      <Navbars></Navbars>

      <Headerheading />
    </div>
  );
};

export default Header;
