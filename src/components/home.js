import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';
import Header from './header';

import SavedResumes from './savedResumes';

function Home() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [resumes, setResumes] = useState([])
    
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
        <div className='flex h-screen p-8'>
            <div className='w-[40%] overflow-auto mt-12'>
                <SavedResumes />
            </div>
            <div className='flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer mt-12'>
              <Link to='/create'>
                  <div className='flex justify-center items-center h-full'>
                    <h1 className='text-4xl'>Edit</h1>
                  </div>
              </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Home