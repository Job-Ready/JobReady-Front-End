import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';
import Header from './header';

import SavedResumes from './savedResumes';

function Home() {
  const [token, setToken] = useState(localStorage.getItem('token'));
    
//  axios.post('http://localhost:3001/create-resume') 
//   .then(response => {
//       console.log(response);
//   })
//   .catch(error => {
//       console.log(error);
//   })

//on pressing the plus button, a new resume should be created
// user should be redirected to the create page
// axios.post('http://localhost:3001/create-resume')

//on pressing the existing resumes, the user should be able to see 
// the resume on the right side of the screen
// on clicking the resume, the user should be redirected to the create page 
console.log('token:', token);
if (!token || token === null) {
  console.log('token:', token);
  // token exists but it is null in local storage
  return <Navigate replace to="/" />;
} 

  return (
    <div>
        <Header />
        <div className='flex h-screen p-8'>
            <div className='w-[40%] overflow-auto'>
                <SavedResumes />
            </div>
            <div className='flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer'>
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