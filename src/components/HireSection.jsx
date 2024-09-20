import React from "react";
import "../css/HireSection.css"; // Import custom CSS for styles
import hire from '../assets/img/lead.png'
const HireSection = () => {
  return (
   <div className="hire">
     <div className="hire-section new-background">
     <div className="hire-image">
        <img src={hire} alt="Hire Banner" className="image" />
      </div>
      <div className="hire-content">
        <h2 className="hire-title">Join the Dotsito Team of Experts!</h2>
        <p className="hire-subtitle">
          At Dotsito, we innovate and build powerful solutions <br /> with our talented team of developers and designers. <br /> Be a part of a company that drives transformation in the digital world.
        </p>
      </div>
      <div className="hire-button-wrapper">
        <button className="hire-button">Join us</button>
      </div>
    </div>
    <hr />
   </div>
  );
};

export default HireSection;
