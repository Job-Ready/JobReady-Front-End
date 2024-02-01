import React from 'react'
import { Link } from 'react-router-dom'
import AuthForm from './google-auth';
import logo from '../assets/JobReady2-nobg-crp.png'

function login() {
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
          <form className="space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              {/* Add your login form fields here */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              {/* Add your login button here */}
              <Link to='/home'>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </Link>
              <AuthForm isSignup={false} />
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to='/signup'><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a></Link>
          </p>
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
  )
}

export default login