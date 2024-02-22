import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Plain from './templates/plain' 

axios.defaults.baseURL = process.env.REACT_APP_URL

function SavedResumes({resumes, onResumeClick}) {

  const [formData, setFormData] = useState({
    userId: localStorage.getItem('User'),
    details: {},
    workExperiences: [],
    projects: [],
    education: [],
    languages: [],
    skills: []
  });

  const createResume = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/create-resume', formData, { headers: { Authorization: token }});
      localStorage.setItem('Resume_Id', response.data.resume.id);
    } catch (error) {
      console.log('Login failed:', error.message);
    }
  }

  return (
    <div>
  <div>
    <h1 className='mt-4 mb-10 text-3xl'>My Resumes</h1>
    <div className='flex flex-wrap p-4 overflow-auto'>
      {resumes.map((resume, index) => (
        <div key={index} onClick={() => onResumeClick(index)} className='w-28 h-28 mb-4 mr-4 bg-slate-100 shadow-md rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer'>
          {/* Render resume details here */}
        </div>
      ))}
      <div className='w-28 h-28 mb-4 mr-4 bg-white shadow-md rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer'>
        <Link to='/create'>
          <div onClick={() => createResume()} className='flex justify-center items-center h-full'>
            <h1 className='text-4xl'>+</h1> 
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default SavedResumes