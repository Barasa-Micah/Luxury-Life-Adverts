import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';
import { getGreeting } from '../utils/getGreeting';

const LogoutButton = () => {
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setNotification(`${getGreeting()}, see you soon!`);
    setTimeout(() => {
      navigate('/');
    }, 2000); 
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {notification && <Notification message={notification} onClose={() => setNotification('')} />}
    </div>
  );
};

export default LogoutButton;
