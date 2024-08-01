import React, { useState } from 'react';
import { FaShoppingCart, FaEnvelope, FaTrashAlt } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`cart-container ${menuOpen ? 'menu-open' : ''}`}>
      <header className="cart-header">
        <img src="https://richlifeadverts.com/logo.png" alt="Rich Life Adverts Logo" className="cart-logo" />
        <div className="header-right">
          <div className="icon-container">
            <FaEnvelope className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <FaShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="hamburger-icon" onClick={toggleMenu}>&#9776;</div>
        </div>
      </header>
      <div className="cart-banner">
        <h2>My Shopping Cart <FaShoppingCart /></h2>
        <p>We Strive to deliver World Wide thats why we offer free delivery in this Country</p>
      </div>
      <div className="cart-content">
        <table className="cart-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src="https://via.placeholder.com/50" alt="Product" /> Cup Cake</td>
              <td>1</td>
              <td>400.00 KSH</td>
              <td><FaTrashAlt className="delete-icon" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src="https://via.placeholder.com/50" alt="Product" /> BlueTooth</td>
              <td>1</td>
              <td>400.00 KSH</td>
              <td><FaTrashAlt className="delete-icon" /></td>
            </tr>
            <tr>
              <td>1</td>
              <td><img src="https://via.placeholder.com/50" alt="Product" /> Cup Cake</td>
              <td>1</td>
              <td>400.00 KSH</td>
              <td><FaTrashAlt className="delete-icon" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src="https://via.placeholder.com/50" alt="Product" /> BlueTooth</td>
              <td>1</td>
              <td>400.00 KSH</td>
              <td><FaTrashAlt className="delete-icon" /></td>
            </tr>
          </tbody>
        </table>
        <div className="cart-summary">
          <p>VAT%: <span>0.00</span></p>
          <p>Coupon 10%: <span>0.00</span></p>
          <p>Total: <span className="total">1,600.00 KSH</span></p>
        </div>
      </div>
      <div className={`overlay ${menuOpen ? 'open' : ''}`}>
        <div className="overlay-menu">
          <h3 className="overlay-title">Menu</h3>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/investment">Investment</a></li>
            <li><a href="/transactions">Transactions</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/forex">Forex</a></li>
            <li><a href="/uploads">Uploads</a></li>
            <li><a href="/markethub">MarketHub</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
