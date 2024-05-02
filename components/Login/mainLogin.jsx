import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLogin from './customLogin';
import LoginForm from './sellerLogin';

const App = () => {
  const handleLogin = (formData) => {
    console.log('Login data:', formData);
    // Implement backend logic to verify login details
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLogin />} />
        <Route path="/login/seller" element={<LoginForm onSubmit={handleLogin} />} />
        <Route path="/login/customer" element={<LoginForm onSubmit={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
