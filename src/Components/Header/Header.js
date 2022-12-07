import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavbarComponents.css";
import Headerheading from "./Headerheading";
import Cart from "../Cart/Cart";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar" fixed="top">
        <Nav.Link href="#">
          <h5 className="navbarheading ">Home</h5>
        </Nav.Link>
        <Nav.Link href="#" className="ml-3">
          <h5 className="navbarstore">Store</h5>
        </Nav.Link>
        <Nav.Link href="#" className="">
          <h5 className="navbarabout ">About</h5>
        </Nav.Link>
        <Cart />
      </Navbar>
      <Headerheading />
    </div>
  );
};

export default Header;
