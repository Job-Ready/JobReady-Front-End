import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/JobReady2-nobg-crp.png'

function Header() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(localStorage.getItem('token') ? true : false);
    const logout = () => {
        localStorage.clear()
        //window.location.href = '/'
        navigate('/')
    }

  return (
    <div>
        <header className="bg-white fixed w-full h-12 flex justify-center items-center border-b-2 z-10">
                <nav className='w-[80%] h-full flex justify-between'>
                    <div className='flex items-center '>
                        <button>
                            <img src={logo} alt="" className='w-[170px]' />
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex items-center'>
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/aboutus'><button><li>About us</li></button></Link>
                            {isLogin ? 
                                <button onClick={logout}>
                                    <li>
                                        Logout
                                    </li>
                                </button>
                            : null}
                        </ul>
                    </div>
                </nav>
            </header>
    </div>
  )
}

export default Header