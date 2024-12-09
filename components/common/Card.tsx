// This file will define a reusable Card component that will be used across the project to display information about various properties.

import React from 'react';
import '../.././styles/'; // Import the CSS file for styling

const Card = ({ Will take props }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;