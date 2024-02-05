import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/JobReady2-nobg-crp.png';
import axios from 'axios'; 
import Login from './login';
import SignUp from './signup';


const LandingPage = () => {
    const [component, setComponent] = useState(<SignUp />);
    const changeComponent = (component) => {
        setComponent(component);
    }


  return (
    <div className="min-h-screen h-[600px] flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-[30%] h-full mx-6">
      <div>
        <div className='flex items-center justify-center'>
            <Link className='hover:scale-110 transition-transform duration-200' to='/'>
                <button>
                    <img src={logo} alt="" className='w-[250px]' />
                </button>
            </Link> 
        </div>
        <p className="text-center text-sm text-gray-600">
          Welcome! Sign in or create an account.
        </p>
      </div>

    <div className='mt-[30%]'>
        {component.type === SignUp ? (
            <div>
                 <SignUp />
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <button onClick={() => changeComponent(<Login />)} className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </button>
                </p>
            </div>
        ) : (
            <div>
                <Login />
                <p className="mt-2 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button onClick={() => changeComponent(<SignUp />)} className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign up
                    </button>
                </p>
            </div>    
        )}
    </div>

    </div>
    <div className='flex items-center justify-center w-[70%] h-full bg-sky-400 bg-opacity-25'>
    <div className='p-10'>
        <h1 className='text-5xl font-semibold mb-4'>Create your resume in minutes</h1>
        <p className='text-2xl font-semibold'>Get started with our easy-to-use resume builder now.</p>
        <Link to='/home'>    
            <button className='text-white bg-sky-400 rounded-md px-4 py-2 shadow-md mt-4'>Get Started</button>
        </Link>
    </div>
    </div>
    </div>
    
  );
};

export default LandingPage;
