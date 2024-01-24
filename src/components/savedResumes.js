import React from 'react'
import { Link } from 'react-router-dom';

function SavedResumes() {
  return (
    <div>
        <div>
            <h1 className='mt-4 mb-10 text-3xl'>My Resumes</h1>
            <div className='flex p-4'>
              <div className='w-28 h-28 mr-4 bg-slate-100 shadow-md rounded-md'>
                  
              </div>
              <div className='w-28 h-28 bg-white shadow-md rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer'>
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