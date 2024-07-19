import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../assets/luxurylogo.jpeg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // Simulate an API call
      setTimeout(() => {
        // Simulating a successful login
        if (username === 'admin' && password === 'password') {
          setMessage('Login successful');
          navigate('/home');
        } else {
          setMessage('Invalid username or password');
        }
      }, 1000);
    } else {
      setMessage('Please enter both username and password');
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <img src={logo} alt="Luxury Life Adverts Logo" className="logo" />
        <h1 className="title">Luxury Life Adverts</h1>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Your Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && <p className={message === 'Login successful' ? 'success' : 'error'}>{message}</p>}
          <button type="submit" className="button">Login Now</button>
        </form>
        <div className="links">
          <button 
            onClick={() => navigate('/recover')} 
            className="link-button">
            Forgot Password
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

export default LoginPage;
