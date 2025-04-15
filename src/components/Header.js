import logo from "../assets/images/gap_logo.png"; // Fixed: added 'from'
import React, { useState } from "react";
import IoIoArrowDown from "../components/IoIoArrowDown"; // Fixed: added 'from'

import "../App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <img src={logo} alt="Company Logo" />
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          // Close icon (when the menu is open)
          <>
            <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
          </>
        ) : (
          // Replace with an icon/image if needed
          // Hamburger icon (when the menu is closed)
          <div className="close-icon">✖</div>
        )}
      </div>

      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu-item">
          <li className="feature-dropdown">
            <a href="#home">Features</a>
            <IoIoArrowDown />
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="#feature1">Feature</a>
              </li>
              <li className="dropdown-item">
                <a href="#feature2">Feature</a>
              </li>
              <li className="dropdown-item">
                <a href="#feature3">Feature </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
        <div className="header-buttons">
          <div className="inner-container">
            <button className="getAccess-button">Get Access</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
