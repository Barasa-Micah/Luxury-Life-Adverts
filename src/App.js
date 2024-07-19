import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PasswordRecoveryPage from './components/PasswordRecoverypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/signup'  element={<SignupPage />} />
        <Route path='/recover' element={<PasswordRecoveryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
