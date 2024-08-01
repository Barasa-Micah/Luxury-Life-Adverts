import React, { useState } from 'react';
import { FaShoppingCart, FaEnvelope, FaTrashAlt } from 'react-icons/fa';
import './Cart.css';
import logo from '../assets/luxurylogo.jpeg'

const Cart = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const products = [
    {
      id: 1,
      name: 'Cup Cake',
      qty: 1,
      price: '400.00 KSH',
      image: 'https://via.placeholder.com/50?text=Cup+Cake'
    },
    {
      id: 2,
      name: 'BlueTooth',
      qty: 1,
      price: '400.00 KSH',
      image: 'https://via.placeholder.com/50?text=BlueTooth'
    },
    {
      id: 3,
      name: 'Cup Cake',
      qty: 1,
      price: '400.00 KSH',
      image: 'https://via.placeholder.com/50?text=Cup+Cake'
    },
    {
      id: 4,
      name: 'BlueTooth',
      qty: 1,
      price: '400.00 KSH',
      image: 'https://via.placeholder.com/50?text=BlueTooth'
    }
  ];

  return (
    <div className={`cart-container ${menuOpen ? 'menu-open' : ''}`}>
      <header className="cart-header">
        <img src={logo} alt="Luxury Life Adverts Logo" className="cart-logo" />
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td><img src={product.image} alt={product.name} /> {product.name}</td>
                <td>{product.qty}</td>
                <td>{product.price}</td>
                <td><FaTrashAlt className="delete-icon" /></td>
              </tr>
            ))}
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
