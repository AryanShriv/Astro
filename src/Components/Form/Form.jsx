import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    timeOfBirth: { hour: '', minute: '', period: 'AM' },
    country: '',
    state: '',
    city: '',
    question: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTimeChange = (e) => {
    setFormData({
      ...formData,
      timeOfBirth: {
        ...formData.timeOfBirth,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="jkm">
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Kindly provide below details</h2>

      <div className="form-group">
        <label htmlFor="typeOfQuestion">Type of question</label>
        <input
          type="text"
          id="typeOfQuestion"
          name="typeOfQuestion"
          placeholder="Type of question"
          value={formData.typeOfQuestion}
          onChange={handleChange}
        />
      </div>

      <div className="form-group-row">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group-row">
        <div className="form-group">
          <label htmlFor="timeOfBirth">Time of birth</label>
          <div className="time-inputs">
            <input
              type="number"
              name="hour"
              placeholder="Hour"
              value={formData.timeOfBirth.hour}
              onChange={handleTimeChange}
            />
            <span>:</span>
            <input
              type="number"
              name="minute"
              placeholder="Minute"
              value={formData.timeOfBirth.minute}
              onChange={handleTimeChange}
            />
            <select
              name="period"
              value={formData.timeOfBirth.period}
              onChange={handleTimeChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group-row">
        <div className="form-group">
          <label htmlFor="country">Country of birth</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country of birth"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State/Province</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State/Province"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="question">Question</label>
        <textarea
          id="question"
          name="question"
          placeholder="Question"
          value={formData.question}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
  );
};

export default Form;
