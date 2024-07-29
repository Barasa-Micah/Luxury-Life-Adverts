import React, { useState } from "react";
import './Register.css';
import logo from '../assets/luxurylogo.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
    upline: 'None'
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return(
    <div className="RegisterContainer">
      <div className="RegisterCard">
        <form className="RegisterForm" onSubmit={handleSubmit}>
          <div className="LogoContainer">
            <img src={logo} alt="Luxury Life Adverts" className="logo" />
            <h2>Register</h2>
          </div>
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
        <div className="RegisterImage"></div>
      </div>
    </div>
  )
};

export default Register;
