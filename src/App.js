import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />
          <Route path='/' Component={Login} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
