import React from 'react';
import './MenuDisplay.css'; // Import CSS file for styling

const MenuDisplay = ({ dishes }) => {
  return (
    <div className="menu-display">
      <h2>Menu</h2>
      <div className="dish-list">
        {dishes.map((dish, index) => (
          <div key={index} className="dish">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Price: ${dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuDisplay;
