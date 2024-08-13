import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'; 

import imag from '../../Assets/Hero/Hero-bg.png'

const ServicesSection = () => {
  return (
    <div className='ServicesSection'>
    <div className="services-head"><h2>OUR SERVICES</h2></div>
    <section className="services-section">
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
      <ServiceCard 
        imageSrc={imag}
        title="Future Prediction"
        description="Get insights into your future with personalized predictions."
      />
    </section>
    </div>
  );
};

export default ServicesSection;
