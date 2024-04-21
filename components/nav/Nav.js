import React from 'react';
import './NavBar.css'; // Import CSS file for styling

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src="company-logo.png" alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/menu">Menu</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;

