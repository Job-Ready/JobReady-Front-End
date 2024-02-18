import React, {useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
import Header from './header';

function Account() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('token');
      setToken(updatedToken);
    };
    window.addEventListener('storage', handleStorageChange);
    if (!token || token === undefined || token === null) {
      return <Navigate replace to="/" />;
    } 
  return (
    <div>
            <Header />
    </div>
  )
}

export default Account
