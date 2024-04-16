import React,{Component} from 'react';
//import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../reqCss/styling.css";

class FoodCard extends Component {
  render() {
    const { food } = this.props;

    return (
      <div className="food-card">
        {/* Wrap the image with a Link */}
       { /*<Link to="/restaurant"> */ }
          <img src={food.imageUrl} alt={food.name} className="food-image" />
       {/* </Link> */}
        <div className="food-details">
          <h3 className="food-name">{food.name}</h3>
          {/* Add more details if needed */}
        </div>
      </div>
    );
  }
}

export default FoodCard;
