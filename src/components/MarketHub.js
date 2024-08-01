import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './MarketHub.css';
import logo from '../assets/luxurylogo.jpeg'

const MarketHub = () => {
  return (
    <div className="markethub-container">
      <header className="markethub-header">
        <div className="logo-container">
          <img
            src={logo}
            alt="Luxury life Adverts Logo"
            className="markethub-logo"
          />
          <h1>LUXURY LIFE ADVERTS.</h1>
        </div>
      </header>
      <main className="markethub-main">
        <section className="markethub-content">
          <h2>MARKET-HUB.</h2>
          <p>Feel free to find Your taste in our Hub Store, Considering free delivery #upline 60%</p>
          <div className="markethub-buttons">
            <button className="food-hub-btn">Food Hub</button>
            <button className="electronic-hub-btn">Electronic Hub</button>
            <button className="cart-btn"><FaShoppingCart /> My-Cart</button>
          </div>
          <div className="markethub-panel">
            <h3>Food-Hub</h3>
            <p>Foods Dropping Soon</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MarketHub;
