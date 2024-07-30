import React from 'react';
import './Investment.css';

const Investment = () => {
  return (
    <div className="investment-container">
      <header className="investment-header">
        <h2>Investment Info</h2>
        <p>Unlock financial growth with our exclusive investment strategy. Flexible options from 1 to 5 days, delivering an impressive 80% profit. Seamless and transparent, our process ensures hassle-free investing. Fill out the form below and start your journey.</p>
      </header>
      <div className="investment-content">
        <div className="investment-form">
          <h3>Investment Form</h3>
          <form>
            <select name="days">
              <option value="">-- How many Days --</option>
              <option value="1">1 Day</option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
            </select>
            <input type="number" placeholder="Amount to Invest" />
            <input type="text" placeholder="Profit: 0.00 KSH" readOnly />
            <input type="text" placeholder="Phone Number" />
            <button type="submit">Invest Now</button>
          </form>
        </div>
        <div className="investment-records">
          <h3>My Investment Records</h3>
          <p>Your First Investment Records will be visible here.</p>
        </div>
      </div>
    </div>
  );
};

export default Investment;
