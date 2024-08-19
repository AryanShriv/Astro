import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const ServicesSection = () => {
  return (
    <div className="ServicesSection">
      <div className="services-head">
        <h2>OUR SERVICES</h2>
      </div>
      <section className="services-section">
        <ServiceCard
          imageSrc="https://bunny-wp-pullzone-hafouxeto5.b-cdn.net/wp-content/uploads/2018/06/Printed-Horoscope-For-New-Born-Baby-PavitraJyotish.jpg"
          title="Janam Kundali Making"
          description="Get insights into your future with personalized predictions."
          link="/Form"
        />
        <ServiceCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbW-P_YtdVsUscYb5s1rOLnmXo-v7piP4HsUXQ_UJFsDmnWhL"
          title="Job Related"
          description="Get insights into your future with personalized predictions."
          link="/Form"
        />
        <ServiceCard
          imageSrc="https://5.imimg.com/data5/FH/OB/DJ/SELLER-74022158/kundali-match-making-250x250.jpg"
          title="Jodi Milan (Compatibility look up)"
          description="Get insights into your future with personalized predictions."
          link="/Form"
        />
        <ServiceCard
          imageSrc="https://static.toiimg.com/photo/99112936.cms"
          title="Shaadi (Marriage)"
          description="Get insights into your future with personalized predictions."
          link="/Form"
        />
        <ServiceCard
          imageSrc="https://www.astrodevam.com/media/wysiwyg/knowledge-bank/yoga.jpg"
          title="Muhurata (Auspicious time)"
          description="Get insights into your future with personalized predictions."
          link="/Form"
        />
        <ServiceCard
          imageSrc="https://static.punjabkesari.in/multimedia/18_42_076131981unnamed.jpg"
          title="Shubh Ashubh Fal"
          description="Get insights into your future with personalized predictions."
          link="/Form"
        />
        <ServiceCard
          imageSrc="https://t3.ftcdn.net/jpg/05/12/84/46/360_F_512844645_2iCd4hgnhlhkQqtcSsqigjqTvbRJnZ4g.jpg"
          title="Prashan (Question)"
          description="Get insights into your future with personalized predictions."
          link="/Form"
        />
      </section>
    </div>
  );
};

export default ServicesSection;
