import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import Header from './header';

import SavedResumes from './savedResumes';

function Home() {
    
  return (
    <div>
        <Header />
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