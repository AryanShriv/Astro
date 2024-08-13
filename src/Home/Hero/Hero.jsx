import React from 'react';
import './Hero.css'

import hero from '../../Assets/Hero/Hero.png'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Astrological Journey Awaits</h1>
        <p>Discover your path with personalized astrological guidance.</p>
        <button className="cta-button">Book a Consultation</button>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Astrology" />
      </div>
    </section>
  );
};

export default HeroSection;
