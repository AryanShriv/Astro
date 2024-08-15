import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column footer-logo">
        <h1>YourLogo</h1>
      </div>
      <div className="footer-column">
        <h4>Services</h4>
        <ul>
        <li><Link to="/">Janam Kundali Making</Link></li>
              <li><Link to="/">Job Related</Link></li>
              <li><Link to="/">Jodi Milan (Compatibility look up)</Link></li>
              <li><Link to="/">Shaadi (Marriage)</Link></li>
              <li><Link to="/">Muhurata (Auspicious time)</Link></li>
              <li><Link to="/">Shubh Ashubh Fal</Link></li>
              <li><Link to="/">Prashan (Question)</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:info@example.com">Email Us</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
