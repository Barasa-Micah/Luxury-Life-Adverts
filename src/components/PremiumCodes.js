import React from 'react';
import './PremiumCodes.css';
import logo from '../assets/luxurylogo.jpeg'

const PremiumCodes = () => {
  return (
    <div className="premium-codes-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Rich-Life Adverts" className="logo" />
        </div>
        <div className="header-icons">
          <div className="icon-container">
            <i className="fas fa-envelope icon"></i>
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <i className="fas fa-shopping-cart icon"></i>
            <span className="badge">0</span>
          </div>
          <div className="hamburger-icon">
            <i className="fas fa-bars icon"></i>
          </div>
        </div>
      </div>
      <div className="content">
        <h1 className="content-title">Our Premium Codes.</h1>
        <p className="content-description">
          This page automatically generates a (9) figure code in this format ["xxx-xxx-xxx"]
          the codes is generated every time based on defined pricer's and their attributes.
        </p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-image copper-visa"></div>
          <div className="card-content">
            <h2>COPPER VISA</h2>
            <p>XXX-XXX-XXX</p>
            <ul>
              <li>Whatsapp Approval</li>
              <li>Cashback Approval</li>
              <li>Spinning Approval</li>
              <li>Unlock Code</li>
            </ul>
            <button>Buy 3000 KSH</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image bronze-visa"></div>
          <div className="card-content">
            <h2>BRONZE VISA</h2>
            <p>XXX-XXX-XXX</p>
            <ul>
              <li>Whatsapp Approval</li>
              <li>Cashback Approval</li>
              <li>Spinning Approval</li>
              <li>Verification Code</li>
            </ul>
            <button>Buy 5000 KSH</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image diamond-visa"></div>
          <div className="card-content">
            <h2>DIAMOND VISA</h2>
            <p>XXX-XXX-XXX</p>
            <ul>
              <li>Whatsapp Approval</li>
              <li>Cashback Approval</li>
              <li>Spinning Approval</li>
              <li>Agent Code</li>
            </ul>
            <button>Buy 6500 KSH</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image gold-visa"></div>
          <div className="card-content">
            <h2>GOLD VISA</h2>
            <p>XXX-XXX-XXX</p>
            <ul>
              <li>Whatsapp Approval</li>
              <li>Cashback 50,000.00 KSH</li>
              <li>Cashback Approval</li>
              <li>Spinning Approval</li>
              <li>Access Code</li>
            </ul>
            <button>Buy 10000 KSH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCodes;
