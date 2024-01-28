import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/JobReady2-nobg.png'

function header() {
  return (
    <div>
        <header className="h-16 flex justify-center items-center mt-8 mb-14">
                <nav className='w-[80%] sticky top-0 mt-4 flex justify-between'>
                    <div className='flex items-center '>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/'><button>
                            <img src={logo} alt="" className='w-[250px]' />
                        </button></Link> 
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex items-center'>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/aboutus'><button><li>About us</li></button></Link> 
                        <Link to='/login'><li className=' text-white mr-2 cursor-pointer bg-sky-400 rounded-md px-4 py-2 shadow-md'>Login</li></Link>
                            <li className='text-white cursor-pointer bg-sky-400 rounded-md px-4 py-2 shadow-md'>Sign Up</li>
                        </ul>
                    </div>
                </nav>
            </header>
    </div>
  )
}

export default header