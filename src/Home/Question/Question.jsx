import React, { useState } from 'react';
import './Question.css';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    tob: '',
    ampm: 'AM', // New state for AM/PM
    place: '',
    gen: '',
    question: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      dob: '',
      tob: '',
      place: '',
      gen: '',
      question: ''
    });
  };

  return (
    <section className="query-section">
      <h2 className="query-heading">Contact Us</h2>
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
          <label htmlFor="dob">Date Of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tob">Time Of Birth:</label>
          <div className="time-of-birth">
            <input
              type="time"
              id="tob"
              name="tob"
              value={formData.tob}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="place">Place Of Birth (With State):</label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gen">Gender:</label>
          <input
            type="text"
            id="gen"
            name="gen"
            value={formData.gen}
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

        <div className="form-group">
          <label htmlFor="email">Email-ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
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
