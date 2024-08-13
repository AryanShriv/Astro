import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="learn-more">Learn More</a> {/* Optional CTA */}
      </div>
    </div>
  );
};

export default ServiceCard;
