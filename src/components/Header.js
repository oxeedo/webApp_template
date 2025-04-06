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
        {/* Hamburger icon (three lines) */}
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
      </div>
      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li className="dropdown-container">
            <a href="#home">Features</a>
            <IoIoArrowDown />
            <ul class="dropdown">
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
            <a href="#home">About us</a>
          </li>
        </ul>
      </nav>
      <div className="header-buttons">
        <div className="inner-container">
          <button className="getAccess-button">Get Access</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
