import React from 'react';
import './HexCard.css'; // Import the CSS for hexagonal card styling

const HexCard = ({ icon, title, description }) => {
  return (
    <div className="hex-card">
      <img src={icon} alt={title} className="hex-card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HexCard;
