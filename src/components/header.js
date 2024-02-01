import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/JobReady2-nobg-crp.png'

function header() {
  return (
    <div>
        <header className="h-12 flex justify-center items-center mt-4 mb-14">
                <nav className='w-[80%] h-full sticky top-0 mt-4 flex justify-between'>
                    <div className='flex items-center '>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/home'>
                            <button>
                                <img src={logo} alt="" className='w-[250px]' />
                            </button>
                        </Link> 
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex items-center'>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/aboutus'><button><li>About us</li></button></Link>
                        </ul>
                    </div>
                </nav>
            </header>
    </div>
  )
}

export default header