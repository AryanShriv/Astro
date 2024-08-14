import React, { useState } from 'react';
import './Question.css';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control the pop-up

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    setFormData({
      name: '',
      email: '',
      question: ''
    });
  };

  return (
    <section className="query-section">
      <h2 className="query-heading">Have a Question?</h2>
      <form onSubmit={handleSubmit} className="query-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Your Question:</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {isSubmitted && (
        <div className="confirmation-popup">
          <p>Thank you! Your question has been submitted.</p>
        </div>
      )}
    </section>
  );
};

export default QueryForm;
