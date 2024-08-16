import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
import logo from '../assets/luxurylogo.jpeg';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
    upline: 'None'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', formData);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('firstName', response.data.firstName);
      localStorage.setItem('lastName', response.data.lastName);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('phone', response.data.phone);
      localStorage.setItem('country', response.data.country);

      navigate("/dashboard");
    } catch (error) {
      console.error('There was an error registering the user:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="RegisterContainer">
      <div className="RegisterCard">
        <form className="RegisterForm" onSubmit={handleSubmit}>
          <div className="LogoContainer">
            <img src={logo} alt="Luxury Life Adverts" className="Logo" />
            <h2>Register</h2>
          </div>
          <input 
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input 
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select 
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose Country --</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="Tanzania">Tanzania</option>
          </select>
          <input 
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div> Your Upline: {formData.upline} </div>
          <button type="submit">Create Account</button>
          <div className="Links">
            <a href="/login">Already have an Account?</a>
            <a href="/customer-care">Customer Care</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
