import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/JobReady2-nobg-crp.png'

function Header() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        //window.location.href = '/'
        navigate('/')
    }

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
                            
                                <button onClick={logout}>
                                    <li>
                                        Logout
                                    </li>
                                </button>
                            
                        </ul>
                    </div>
                </nav>
            </header>
    </div>
  )
}

export default Header