import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Add footer content */}
      <p>&copy; {new Date().getFullYear()} LatestHoneymoons.com All rights reserved.</p>
    </footer>
  );
};

export default Footer;