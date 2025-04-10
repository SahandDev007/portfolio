import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Harshal Tribhuvan</p>
    </footer>
  );
};

export default Footer;
