import React,{ Component} from 'react';
import "../reqCss/styling.css";

class Offers extends Component {
  render() {
    // Fetch offers from backend
    const offers = []; // Example: Fetch offers from backend and store them here

    return (
      <div className="offers">
        {/* Display offers if available */}
        {offers.length > 0 &&
          <div className="offer-container">
            <h2>Offers</h2>
            {/* Render offers */}
          </div>
        }
      </div>
    );
  }
}

export default Offers;
