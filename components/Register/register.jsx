import React, { useState } from 'react';
import axios from 'axios';
import style from'./register.module.css';

//register form done
const RegisterForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    phoneNumber2: '',
    address1: '',
    address2: '',
    pincode: '',
    state: '',
  });

  // State for error messages
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    try {
      // Send data to backend via POST request
      const response = await axios.post('/api/register', formData);

      if (response.status === 200) {
        console.log('User registered successfully');
        // Reset form and clear error messages on success
        setFormData({
          name: '',
          username: '',
          email: '',
          password: '',
          phoneNumber: '',
          phoneNumber2: '',
          address1: '',
          address2: '',
          pincode: '',
          state: '',
        });
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className={style.registerform}>
      <h2>Registration</h2>
      {errorMessage && <p className={style.errormessage}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <table>
        <tr>          
            <td><label>Name: </label></td>
            <td><input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <tr>
          <td><label>Username: </label></td>
          <td><input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          /></td>
        </tr>
        <tr>
          <td> <label>Email: </label></td>
          <td><input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <tr>
          <td> <label>Password: </label></td>
          <td> <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <tr>
          <td><label>Phone Number1: </label></td>
          <td><input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <tr>
          <td> <label>Phone Number 2: </label></td>
          <td>  <input
            type="number"
            name="phoneNumber2"
            value={formData.phoneNumber2}
            onChange={handleChange}
          /></td>
        </tr>
        <tr>
          <td> <label>Address 1: </label></td>
          <td> <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <tr>
          <td><label>Address 2: </label></td>
          <td><input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <tr>
          <td> <label>Pincode: </label></td>
          <td> <input
            type="number"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <tr>
          <td> <label>State: </label></td>
          <td><input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          /></td>
        </tr>
        <br/>
        <tr>
          <td colSpan={2}>
          <center><button type="submit">Register</button></center>
          </td>
        </tr>
        
        
        </table>
      </form>
    </div>
  );
};

export default RegisterForm;
