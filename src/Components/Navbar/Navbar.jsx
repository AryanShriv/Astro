import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '../Button/Button';
import Logo from "../../Assets/Navbar/Logo.jpg"

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
      <Link to="/">
      <div className="navbar-logo">
        <img src={Logo} alt="" srcset="" />
      </div>
        </Link>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <Link to="/">Services</Link>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <li><Link to="/Form">Janam Kundali Making</Link></li>
              <li><Link to="/Form">Job Related</Link></li>
              <li><Link to="/Form">Jodi Milan (Compatibility look up)</Link></li>
              <li><Link to="/Form">Shaadi (Marriage)</Link></li>
              <li><Link to="/Form">Muhurata (Auspicious time)</Link></li>
              <li><Link to="/Form">Shubh Ashubh Fal</Link></li>
              <li><Link to="/Form">Prashan (Question)</Link></li>
            </ul>
          </li>
          <li><Link to="/">About</Link></li>
        </ul>
      </div>
      <Link to="/Contact">
      <Button/>
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
  