import React,{Component} from 'react';
import "../reqCss/styling.css";
import FoodCard from './card.js'; // Import FoodCard component

class BestFoodItem extends Component {
  render() {
    // Sample best food item data
    const bestFoodItem = {};

    return (
      <div className="best-food-item">
        <h2>Best Food Item</h2>
        <div className="food-cards">
          {/* Render best food item */}
          {bestFoodItem && <FoodCard food={bestFoodItem} />}
        </div>
      </div>
    );
  }
}

export default BestFoodItem;
