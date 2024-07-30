import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import logo from '../assets/luxurylogo.jpeg';

const Dashboard = () => {
  const [user, setUser] = useState({ username: "", firstName: "", lastName: "" });

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    if (storedUsername && storedFirstName && storedLastName) {
      setUser({ username: storedUsername, firstName: storedFirstName, lastName: storedLastName });
    } else {
      // Navigate to login or registration if no user data is found (logic omitted for simplicity)
    }
  }, []);

  const affiliateLink = `https://luxurylifeadverts.com/signup.php?cee=${user.firstName}${user.lastName}`;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={logo} alt="Luxury Life Adverts" className="dashboard-logo" />
        <h1>Rich-Life Adverts</h1>
      </header>
      <div className="welcome-message">
        <p>Welcome Back: {user.username} (Ke)</p>
      </div>
      <div className="package-info">
        <p>
          You are at <span className="no-package">No Package</span>, 0% Profit Daily.
          <button className="link-button">Click me to buy</button>
        </p>
        <p className="resolutions">
          "Buy Basic package@1000 KSH and get awarded 3000 KSH to your M-pesa, buy the PREMIUM package @2500 KSH and get awarded 7500 KSH to your M-pesa, buy the BOSS package at 5000 KSH and get awarded 15000 KSH to your M-pesa, buy GOLD VISA package 10000 KSH and get awarded 50000 KSH to your M-pesa"
        </p>
      </div>
      <div className="dashboard-content">
        <div className="card account-balance">
          <h3>Account Balance:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card invested-profit">
          <h3>Invested Profit:</h3>
          <p>0.00 KSH</p>
          <button className="card-button">Withdraw</button>
        </div>
        <div className="card whatsapp-balance">
          <h3>Whatsapp Balance:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card total-whatsapp-withdrawn">
          <h3>Total Whatsapp Withdrawn:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card current-package">
          <h3>Current Package:</h3>
          <p>No Package</p>
          <div className="package-x">X</div>
        </div>
        <div className="card withdrawn">
          <h3>Withdrawn:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card cashback">
          <h3>Your Cashback:</h3>
          <p>0.00 KSH</p>
          <button className="card-button">Redeem</button>
        </div>
        <div className="card deposit-balance">
          <h3>Deposit Balance:</h3>
          <p>0.00 KSH</p>
        </div>
      </div>
      <footer className="dashboard-footer">
        <div className="user-details">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.username}</td>
                <td>barasamica@gmail.com</td>
                <td>11412121111</td>
              </tr>
            </tbody>
          </table>
          <div className="affiliate-link">
            <p>Affiliate link:</p>
            <a href={affiliateLink}>Luxury Life</a>
          </div>
        </div>
        <button className="copy-link-button">Copy Link</button>
      </footer>
    </div>
  );
};

export default Dashboard;
