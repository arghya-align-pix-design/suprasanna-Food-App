import React,{Component} from 'react';
import "../reqCss/styling.css";
import FoodCard from "./card.js";  // Import your FoodCard component

class FoodDisplay extends Component {
  render() {
    // Sample food data
    const foodItems = [
      { id: 1, name: 'Pizza', imageUrl: 'pizza.jpg' },
      { id: 2, name: 'Burger', imageUrl: 'burger.jpg' },
      { id: 3, name: 'Salad', imageUrl: 'salad.jpg' },
      { id: 4, name: 'Sushi', imageUrl: 'sushi.jpg' },
      { id: 5, name: 'Pasta', imageUrl: 'pasta.jpg' }
    ];

    return (
      <div className="food-display">
        {/* Display 5 food cards on desktop */}
        <div className="food-cards-desktop">
          {foodItems.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        
        {/* Display 1 food card at a time on mobile */}
        <div className="food-cards-mobile">
          {foodItems.map(food => (
            <div key={food.id} className="food-card-mobile">
              <FoodCard food={food} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FoodDisplay;
