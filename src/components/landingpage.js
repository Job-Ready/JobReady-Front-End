import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';


const LandingPage = () => {

    // axios.post('http://localhost:3001/saveResume').then((response) => {
    //     console.log(response.data)
    // })

  return (
        <div>
            <header className="h-16 flex justify-center items-center mt-8 mb-14">
                <nav className='w-[80%] sticky top-0 mt-4 flex justify-between'>
                    <div className='flex items-center '>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/'><button><h1 className='text-xl font-semibold italic'>
                            Job-Ready
                        </h1></button></Link> 
                    </div>
                    <div className=''>
                        <ul className='flex items-center'>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/aboutus'><button><li>About us</li></button></Link> 
                            <li className=' text-white mr-2 cursor-pointer bg-sky-400 rounded-md px-4 py-2 shadow-md'>Login</li>
                            <li className='text-white cursor-pointer bg-sky-400 rounded-md px-4 py-2 shadow-md'>Sign Up</li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className='mx-auto text-center flex flex-col gap-10'>
                <div className='flex flex-col gap-8'>
                    <div className='p-10'>
                        <h1 className='text-5xl font-semibold mb-4'>Create your resume in minutes</h1>
                        <p className='text-2xl font-semibold'>Get started with our easy-to-use resume builder now.</p>
                        <Link to='/home'> 
                            <button className='text-white bg-sky-400 rounded-md px-4 py-2 shadow-md mt-4'>Get Started</button>
                        </Link>
                    </div>
                    <div className='w-[50%]'>
                        <img src="https://www.freepnglogos.com/uploads/website-logo-png/website-logo-website-logo-png-transparent-svg-vector-bie-supply-1.png" alt="" className='w-[100%]' />
                    </div>
                </div>
                <div className="p-8 bg-slate-100 flex flex-col gap-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">Why Choose Us?</h2>
                    <ul className="text-gray-600">
                        <li>Easy-to-use interface for quick resume creation.</li>
                        <li>Customizable templates to suit your style.</li>
                        <li>Download and share your resume with ease.</li>
                        <li>Stay organized with our resume management features.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">How It Works</h2>
                    <div className="flex flex-col md:flex-row items-center justify-evenly space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-400 text-white text-2xl font-bold">1</div>
                            <p className="text-xl font-semibold mt-2">Sign Up</p>
                        </div>
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-400 text-white text-2xl font-bold">2</div>
                            <p className="text-xl font-semibold mt-2">Fill Out</p>
                        </div>
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-400 text-white text-2xl font-bold">3</div>
                            <p className="text-xl font-semibold mt-2">Download</p>
                        </div>
                    </div>
                </div>
            </main>


            <footer className="bg-gray-800 text-white p-8 mt-12">
                <div className="container mx-auto flex justify-evenly items-center">
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-2">Connect With Us</p>
                        <div className="flex items-center justify-center space-x-4">
                            <a href="#your-social-link" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#your-social-link" className="hover:text-gray-400">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#your-social-link" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-2">Contact Us</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
         
        </div>
    
  );
};

export default LandingPage;
