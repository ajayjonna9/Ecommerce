import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavbarComponents.css";
import Headerheading from "./Headerheading";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar" fixed="top">
        {/* <h5 className="navbarheading "></h5> */}
        <Link to="">
          <h5 className="navbarheading ">Home</h5>
        </Link>

        {/* <h5 className="navbarstore"></h5> */}

        <Link to="/">
          <h5 className="navbarstore">Store</h5>
        </Link>
        {/* <h5 className="navbarabout "></h5> */}
        <Link to="/about">
          <h5 className="navbarabout ">About</h5>
        </Link>

        <Cart />
      </Navbar>
      <Headerheading />
    </div>
  );
};

export default Header;
