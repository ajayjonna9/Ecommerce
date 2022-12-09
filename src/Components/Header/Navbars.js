import React from "react";
import "./NavbarComponents.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbars = () => {
  const activestyle = { color: "green" };
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar" fixed="top">
        {/* <h5 className="navbarheading "></h5> */}
        <NavLink
          to="/home"
          activeStyle={activestyle}
          className="navbarheading "
        >
          Home
        </NavLink>

        {/* <h5 className="navbarstore"></h5> */}

        <NavLink to="/" activeStyle={activestyle} className="navbarstore">
          Store
        </NavLink>
        {/* <h5 className="navbarabout "></h5> */}
        <NavLink to="/about" activeStyle={activestyle} className="navbarabout ">
          About
        </NavLink>
        <NavLink
          to="/contactus"
          activeStyle={activestyle}
          className="navbarcontact "
        >
          ContactUs
        </NavLink>
        <Cart />
      </Navbar>
    </div>
  );
};

export default Navbars;
