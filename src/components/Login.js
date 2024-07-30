import React, { useState } from "react";
import './Login.css';
import logo from '../assets/luxurylogo.jpeg';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
