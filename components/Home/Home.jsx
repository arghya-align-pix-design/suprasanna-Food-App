import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import style from'./Home.module.css';


const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Your scroll-related logic
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const clearInput = () => {
      const input = document.getElementsByTagName('input')[0];
      if (input) {
        input.value = '';
      }
    };

    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', clearInput);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clearBtn) {
        clearBtn.removeEventListener('click', clearInput);
      }
    };
  }, []); // Effect runs once on component mount

  return (
    <div className="home">
      <header>
        <h1>USER APP</h1>
        <nav className="navbar">
          <ul>
            {/* <li><Link to="/home">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li> */}
          </ul>
        </nav>
      </header>

      <section className={style.showcasearea}>
        <div className={style.showcaseContainer}>
          <h1 className="main-title">Let food be the medicine and medicine be the food.</h1>
        </div>
      </section>

      {/* <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">About Us</p>
            <h2>There is no love greater than the love of food.</h2>
            <p>
              We provide the most delicious and healthy food with a little twist, making your experience delightful!
            </p>
          </div>
        </div>
      </section> */}
      
      <section id="food">
        <h2>Food According to Mood</h2>
        <div className="food-container container">
          <div className={style.foodTypeBreakfast}>
            <div className="img-container">
              <img src="https://wallpapercave.com/wp/wp1913073.jpg" alt="error" />
              <div className="img-content">
                {/* <Link to="/diet" className="btn btn-secondary">Diet</Link> */}
              </div>
            </div>
          </div>
          <div className={style.foodTypeLunch}>
            <div className="img-container">
              <img src="https://wallpaperaccess.com/full/1843937.jpg" alt="error" />
              <div className="imgContent">
                {/* <Link to="/feast" className="btn btn-secondary">Feast</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;