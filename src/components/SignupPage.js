import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && phone && email && password) {
      // Simulate a successful signup
      navigate('/');
    } else {
      setError('Please fill out all fields');
    }
  };

  return (
    <div className="wrapper">
      <div className="signup-container">
        <img src="/assets/logo.png" alt="Crown Wave Adverts Logo" className="logo" />
        <h1 className="title">LUXURY LIFE ADVERTS</h1>
        <form className="form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">Create Account</button>
        </form>
        <div className="links">
          <a href="/" className="link">Login Now</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
