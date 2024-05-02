import React, { useState } from 'react';
import axios from 'axios'; // To send HTTP requests to backend
import { useNavigate } from 'react-router-dom'; // To navigate after login

const SellerLoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after successful login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login/seller', formData);
      if (response.status === 200) {
        navigate('/seller-dashboard'); // Redirect to seller dashboard if login is successful
      }
    } catch (error) {
      setError('Invalid username or password'); // Display error message on failed login
    }
  };

  return (
    <div>
      <h2>Seller Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if login fails */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SellerLoginForm;
