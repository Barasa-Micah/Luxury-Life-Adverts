import React, { useState } from "react";
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
        <form className="RegisterForm" onSubmit={handleSubmit}>
          <img src={logo} alt="Luxury Life Adverts" className="logo" />
            <h2>Register</h2>
            <input 
            type="text"
            name="username"
            placeholder="formData.username"
            onChange={handleChange}
            required
            />
            <input 
            type="email"
            name="email"
            placeholder="email"
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
            name="confirmPassword"
            placeholder="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            />
            <div> Your Upline: {formData.upline} </div>
            <button type="submit">Create Account</button>
            <div>
              <a href="/login">Already have an Account</a>
              <a href="/customer-care">Customer Care</a>
            </div>
        </form>
        <div className="RegisterImage"></div>
    </div>
  )
};


export default Register