import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/JobReady2-nobg-crp.png';

function Signup() {
  return (
    <div className="min-h-screen h-[600px] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-[30%] mx-4 bg-login-pattern">
        <div>
            <div className='flex items-center justify-center'>
                <Link className='hover:scale-110 transition-transform duration-200' to='/'>
                    <button>
                        <img src={logo} alt="" className='w-[250px]' />
                    </button>
                </Link> 
            </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join us! Create an account to get started.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Add your sign-up form fields here */}
            <div>
              <label htmlFor="fullname" className="sr-only">
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="fullname"
                autoComplete="full-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="confirmpassword"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
            
          </div>

          <div>
            {/* Update your sign-up button here */}
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to='/login'><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </a></Link>
        </p>
      </div>
      <div className='flex items-center justify-center w-[70%] h-full bg-sky-400 bg-opacity-25'>
          <p>
            Create a resume that stands out from the crowd. <br/>
            Free templates, easy, fast and professional. <br/>
            With our free resume builder, create the perfect resume and get hired.
          </p>
      </div>
    </div>
    
  );
}

export default Signup;
