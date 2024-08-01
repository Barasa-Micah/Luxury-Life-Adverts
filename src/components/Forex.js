import React from 'react';
import './Forex.css';
import { FaBitcoin, FaLitecoin, FaEthereum, FaBitcoinAlt } from 'react-icons/fa';

const Forex = () => {
  return (
    <div className="forex-container">
      <div className="forex-header">
        <h1>LUXURY FOREX BOTS.</h1>
        <p>"Since Richlife Provides Wealth Standards below are Forex Bots And pdf strategie template that we consider as an Assets Feel free to buy that Suits you need. #upline 70%"</p>
      </div>
      <div className="forex-cards">
        <div className="forex-card">
          <FaLitecoin className="forex-icon" />
          <h3>LITE-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 50%</li>
          </ul>
          <button>Buy 1000 KSH</button>
        </div>
        <div className="forex-card">
          <FaBitcoin className="forex-icon" />
          <h3>BOOGIE-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 60%</li>
          </ul>
          <button>Buy 1800 KSH</button>
        </div>
        <div className="forex-card">
          <FaEthereum className="forex-icon" />
          <h3>SOLANA-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 70%</li>
          </ul>
          <button>Buy 2500 KSH</button>
        </div>
        <div className="forex-card">
          <FaBitcoinAlt className="forex-icon" />
          <h3>BIT-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 90%</li>
          </ul>
          <button>Buy 4500 KSH</button>
        </div>
      </div>
    </div>
  );
};

export default Forex;
