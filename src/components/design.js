import React from 'react'
import { Link } from 'react-router-dom';

function Design() {
  return (
    <div>
      <header className="h-16 flex justify-center items-center mb-8">
        <nav className='w-[80%] sticky top-0 flex justify-between'>
            <div className='flex items-center '>
              <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/'><button><h1 className='text-xl font-semibold italic'>
                Job-Ready
              </h1></button></Link> 
            </div>
            <div className=''>
                <ul className='flex items-center'>
                    <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/home'><button><li>Home</li></button></Link> 
                    <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/create'><button><li>Create</li></button></Link> 
                    <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/design'><button><li>Design</li></button></Link> 
                    <li className='cursor-pointer'>
                      <button>
                        <img  className=" rounded-full" src="https://picsum.photos/40" />
                      </button>
                  </li>
                </ul>
            </div>
        </nav>
      </header>

      <div className='flex h-screen p-8'>
                <div className='w-[38%] overflow-auto'>
                    
                </div>
                <div className='flex-1 float-left overflow-y-auto'>
                    
                </div>
            </div>
    </div>
  )
}

export default Design
