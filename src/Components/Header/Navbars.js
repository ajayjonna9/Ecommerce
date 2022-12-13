import React, { useContext } from "react";
import "./NavbarComponents.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import Contex from "../Store/Contex";

const Navbars = () => {
  const contexVal = useContext(Contex);
  const navigate = useNavigate();
  const activestyle = { color: "green" };
  const onLogout = () => {
    contexVal.logout();
    navigate("/");
  };
  const onLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar" fixed="top">
        <div className="d-flex flex-row">
          {/* <h5 className="navbarheading "></h5> */}
          <NavLink to="/" activeStyle={activestyle} className="navbarheading ">
            Home
          </NavLink>

          {/* <h5 className="navbarstore"></h5> */}

          <NavLink
            to="/store"
            activeStyle={activestyle}
            className="navbarstore"
          >
            Store
          </NavLink>
          {/* <h5 className="navbarabout "></h5> */}
          <NavLink
            to="/about"
            activeStyle={activestyle}
            className="navbarabout "
          >
            About
          </NavLink>
          <NavLink
            to="/contactus"
            activeStyle={activestyle}
            className="navbarcontact "
          >
            ContactUs
          </NavLink>
          {!contexVal.isLogin && (
            <button onClick={onLogin} className="navbarlogin">
              Login
            </button>
          )}
          {contexVal.isLogin && (
            <button onClick={onLogout} className="logoutbtn">
              Logout
            </button>
          )}

          <Cart />
        </div>
      </Navbar>
    </div>
  );
};

export default Navbars;
