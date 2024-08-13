import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Testimonials.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "Incredible service! The astrologer provided insights that were spot on.",
    photo: "/path-to-jane-doe-photo.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "Incredible service! The astrologer provided insights that were spot on.",
    photo: "/path-to-jane-doe-photo.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "Incredible service! The astrologer provided insights that were spot on.",
    photo: "/path-to-jane-doe-photo.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "Incredible service! The astrologer provided insights that were spot on.",
    photo: "/path-to-jane-doe-photo.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "Incredible service! The astrologer provided insights that were spot on.",
    photo: "/path-to-jane-doe-photo.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "Incredible service! The astrologer provided insights that were spot on.",
    photo: "/path-to-jane-doe-photo.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "Incredible service! The astrologer provided insights that were spot on.",
    photo: "/path-to-jane-doe-photo.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <Swiper
        slidesPerView={1} /* Show 1 slide on small screens */
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="testimonial-photo"
              />
              <div className="testimonial-content">
                <p className="feedback">"{testimonial.feedback}"</p>
                <h3 className="client-name">- {testimonial.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
