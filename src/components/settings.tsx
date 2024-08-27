import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Header from './header';
import { getAccessToken } from '../utils/auth';

const Settings: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const handleStorageChange = () => {
    setToken(getAccessToken());
  };

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!token) {
    return <Navigate replace to="/" />;
  }

  return (
    <Header />
  );
};

export default Settings;