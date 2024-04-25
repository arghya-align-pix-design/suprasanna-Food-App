import React,{Component} from 'react';
import FoodCard from './card.js'; // Import FoodCard component
import "../reqCss/styling.css";

class RecommendedFoodItems extends Component {
  render() {
    // Sample recommended food items data
    const recommendedFoodItems = [];

    return (
      <div className="recommended-food-items">
        <h2>Recommended Food Items</h2>
        <div className="food-cards">
          {/* Render recommended food items */}
          {recommendedFoodItems.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    );
  }
}

export default RecommendedFoodItems;