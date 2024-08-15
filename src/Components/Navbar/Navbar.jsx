import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>YourLogo</h1>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <Link to="/">Services</Link>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <li><Link to="/">Janam Kundali Making</Link></li>
              <li><Link to="/">Job Related</Link></li>
              <li><Link to="/">Jodi Milan (Compatibility look up)</Link></li>
              <li><Link to="/">Shaadi (Marriage)</Link></li>
              <li><Link to="/">Muhurata (Auspicious time)</Link></li>
              <li><Link to="/">Shubh Ashubh Fal</Link></li>
              <li><Link to="/">Prashan (Question)</Link></li>
            </ul>
          </li>
          <li><Link to="/">About</Link></li>
        </ul>
      </div>
      <Link to="/" className="cta-button-nav">Contact Us</Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
  