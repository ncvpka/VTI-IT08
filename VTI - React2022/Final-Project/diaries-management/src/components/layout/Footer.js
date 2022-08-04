import React from "react";
import "./footer.css";

// Navbar
const Footer = (props) => {
  return (
    <div className="footer-container">
      <span className="brand-logo white-text">Developer: Nguyen Chi Vu</span>
      <div className="icons-container">
        <a
          title="github"
          rel="noreferrer"
          href="https://github.com/ncvpka"
        >
          <i className="fab fa-github icon"></i>
        </a>
        <a
          title="instagram"
          rel="noreferrer"
          href="https://www.instagram.com/_chv.iu_/"
        >
          <i className="fab fa-linkedin-in icon"></i>
        </a>
        <a
          title="facebook"
          rel="noreferrer"
          href="https://www.facebook.com/vu.nguyenchi.520"
        >
          <i className="fab fa-facebook-f icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
