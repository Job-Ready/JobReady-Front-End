import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import dummyResumes from './dummyResumes'
import axios from 'axios'

function SavedResumes() {
  const [userId, setUserId] = useState(localStorage.getItem('User'))
  const [resumes, setResumes] = React.useState([]) // [{}, {}, {}]

  const getResumes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/get-resume/${userId}`);
      // console.log(response);
      resumes.append(response.data.resume);
      setResumes(resumes);
      console.log(resumes);
    } catch (error) {
      console.log('Login failed:', error.message); 
    }
  }
  getResumes();

  return (
    <div>
  <div>
    <h1 className='mt-4 mb-10 text-3xl'>My Resumes</h1>
    <div className='flex flex-wrap p-4 overflow-auto'>
      {resumes.map((resume, index) => (
        <div key={index} className='w-28 h-28 mb-4 mr-4 bg-slate-100 shadow-md rounded-md'>
          {/* Render resume details here */}
        </div>
      ))}
      <div className='w-28 h-28 mb-4 mr-4 bg-white shadow-md rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer'>
        <Link to='/create'>
          <div className='flex justify-center items-center h-full'>
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