import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="learn-more">Ask Now</a> 
      </div>
    </div>
  );
};

export default ServiceCard;
