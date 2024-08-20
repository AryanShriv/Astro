import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';

import hero from '../../Assets/Hero/Hero.png'
import Button from '../../Components/Button/Button';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unraveling The Cosmic Dance Of Stars And Planets</h1>
        <p>Discover your path with personalized astrological guidance.</p>
        <Link to="/Contact">
        <Button/>
        </Link>
        {/* Mail per chahiye, details saari */}
      </div>
      <div className="hero-image">
        <img src={hero} alt="Astrology" />
      </div>
    </section>
  );
};

export default HeroSection;
