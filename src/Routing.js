import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Store from "./Components/Storepage/Store";
import About from "./Components/About/About";
import Home from "./Components/HomePage/Home";
import ContactUsPage from "./Components/ContactUs/ContactUsPage";
import Item from "./Components/ItemDetails/Item";
import Login from "./Components/LoginPage/Login";
import Contex from "./Components/Store/Contex";

const Routing = () => {
  const contexVal = useContext(Contex);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/store"
        element={
          contexVal.isLogin ? (
            <Store />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
      <Route path="/store/:items" element={<Item />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<ContactUsPage />} />
    </Routes>
  );
};

export default Routing;
