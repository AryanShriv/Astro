import React from "react";
import './Submit-btn.css'

const Submit = () => {
  return (
    <>
      <button class="Submit-btn">
        <h1>SUBMIT</h1>
        <div className="container-stars">
          <div className="stars"></div>
        </div>
        <div className="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
    </>
  );
};

export default Submit;
