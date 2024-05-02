import React, { useState } from 'react';
import style from'./navnav.module.css';

const HorizontalNavBar = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onNavigate(tab);
  };

  return (
    <div className={style.horizontalNavBar}>
      <div className={style.companyLogo}>
        <img src="company-logo.png" alt="Company Logo" />
      </div>

      <div className={style.navButtons}>
        <button
          onClick={() => handleTabClick('home')}
          className={activeTab === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          onClick={() => handleTabClick('about')}
          className={activeTab === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          onClick={() => handleTabClick('services')}
          className={activeTab === 'services' ? 'active' : ''}
        >
          Services
        </button>
        <button
          onClick={() => handleTabClick('contact')}
          className={activeTab === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>

      <div className={style.searchBar}>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
