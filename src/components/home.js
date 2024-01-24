import {React, useState} from 'react'
import { Link } from 'react-router-dom';

import SavedResumes from './savedResumes';

function Home() {
    
  return (
    <div>
         <header className="h-16 flex justify-center items-center mb-8">
                <nav className='w-[80%] sticky top-0 mt-4 flex justify-between'>
                    <div className='flex items-center '>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/'><button><h1 className='text-xl font-semibold italic'>
                            Job-Ready
                        </h1></button></Link> 
                    </div>
                    <div className=''>
                        <ul className='flex items-center'>
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/home'><button><li>Resumes</li></button></Link> 
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/settings'><button><li>Settings</li></button></Link> 
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/aboutus'><button><li>About us</li></button></Link> 
                            <button className='cursor-pointer'>
                                <img  className="rounded-full" src="https://picsum.photos/40" />
                            </button>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className='flex h-screen p-8'>
                <div className='w-[40%] overflow-auto'>
                    <SavedResumes />
                </div>
                <div className='flex-1 float-left overflow-y-auto bg-slate-100'>
                    
                </div>
            </div>
    </div>
    
  )
}

export default Home