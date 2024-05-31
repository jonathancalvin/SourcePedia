import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <span>Contact Us : 0123456789</span>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <Link to="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></Link>
            </li>
            <li>
              <Link to="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></Link>
            </li>
            <li>
              <Link to="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Sourcepedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
