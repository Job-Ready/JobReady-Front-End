import {React, useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom';
import Header from './header';
import axios from 'axios'; 
import Plain from './templates/plain'; 

import SavedResumes from './savedResumes';

function Home() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('User'))
  const [resumes, setResumes] = useState([]) 

  useEffect(() => {
    const getResumes = async () => {
      try {
        const response = await axios.get(`/get-resume/${userId}`);
        const flattenedResumes = response.data.resume.flat();
        setResumes(prevResumes => [...prevResumes, ...flattenedResumes]);
      } catch (error) {
        console.log('Get Resumes:', error.message);
      }
    };

    getResumes();
  }, []); 
    
  const handleStorageChange = () => {
    const updatedToken = localStorage.getItem('token');
    setToken(updatedToken);
  };
  window.addEventListener('storage', handleStorageChange);
  if (!token || token === undefined || token === null) {
    return <Navigate replace to="/" />;
  } 
  console.log(resumes)
  return (
    <div>
        <Header />
        <div className='flex h-screen p-8'>
            <div className='w-[40%] overflow-auto mt-12'>
                <SavedResumes resumes={resumes} />
            </div>
            <div className='flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer mt-12'>
              <Link to='/create'>
                  <div className=''>
                    {resumes !== undefined && resumes.length !== 0 ?
                      <Plain 
                          details={resumes[0].details} 
                          workExperiences={resumes[0].workExperiences} 
                          projects={resumes[0].projects}
                          education={resumes[0].education}
                          languages={resumes[0].languages}
                          skills={resumes[0].skills}
                      />
                    : <h1 className='text-4xl opacity-30'>No resumes found</h1>}
                  </div>
              </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Home