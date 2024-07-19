import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/luxurylogo.jpeg'
import './PasswordRecoveryPage.css'

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRecovery = (e) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => {
        setMessage('Recovery email sent');
      }, 1000);
    } else {
      setMessage('Please enter your registered email');
    }
  };

  return (
    <div className="wrapper">
      <div className="recovery-container">
        <img src={logo} alt="Luxury Life Adverts Logo" className="logo" />
        <h1 className="title">Luxury Life Adverts</h1>
        <form className="form" onSubmit={handleRecovery}>
          <input
            type="email"
            placeholder="Registered Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {message && <p className="message">{message}</p>}
          <button type="submit" className="button">Recover Now</button>
        </form>
        <div className="links">
          <button 
            onClick={() => navigate('/')} 
            className="link-button">
            Login
          </button>
          <button 
            onClick={() => navigate('/signup')} 
            className="link-button">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryPage;
