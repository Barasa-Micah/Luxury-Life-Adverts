import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Investment from './components/Investment';
import Team from './components/Team'; 
import Transactions from './components/Transactions';
import Packages from './components/Packages';
import Forex from './components/Forex';
import Uploads from './components/Uploads';
import MarketHub from './components/MarketHub';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/team" element={<Team />} /> 
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/forex' element={<Forex />} />
          <Route path='/uploads' element={<Uploads />} />
          <Route path='/markethub' element={<MarketHub />} ></Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
