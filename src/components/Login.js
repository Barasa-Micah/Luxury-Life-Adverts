import React, { useState } from "react";
import './Login.css';
import logo from '../assets/luxurylogo.jpeg';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('firstName', response.data.firstName);
        localStorage.setItem('lastName', response.data.lastName);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('phone', response.data.phone);
        localStorage.setItem('country', response.data.country);

        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your username and password');
    }
  };

  return (
    <div className="LoginContainer">
      <div className="LoginCard">
        <form className="LoginForm" onSubmit={handleSubmit}>
          <div className="LogoContainer">
            <img src={logo} alt="Luxury Life Adverts" className="Logo" />
            <h2>Login</h2>
          </div>
          <input 
            type="text"
            name="username"
            placeholder="Your Username"
            value={formData.username}
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
          <button type="submit">Login</button>
          <div className="Links">
            <a href="/register">Don't have an Account?</a>
            <a href="/forgot-password">Forgot Password</a>
            <a href="/customer-care">Customer Care</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
