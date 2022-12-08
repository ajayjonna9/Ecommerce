import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footerheading">The Generics</h1>
      <div className="footerIcons">
        <a href="https://www.youtube.com/">
          <i className="fa-brands fa-youtube  "></i>
        </a>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default Footer;
