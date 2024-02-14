import React, {useState} from 'react';
import { Link, Navigate, Route } from 'react-router-dom'
import axios from 'axios';
import ClipLoader from './spinner';

axios.defaults.URL = process.env.REACT_APP_URL

function Signup() {
  const [userId, setUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post('/signup', formData);
      const token = response.data.token;
      const userId = response.data.Id
      setToken(token);
      localStorage.setItem('User',userId)
      localStorage.setItem('token', token);
    } catch (error) {
      // Handle error, display error message, etc.
      console.error('Signup failed:', error.response.data.error);
    }
  };

  if (token && token !== null) {
    return <Navigate replace to="/home" userId={userId} setUserId={setUserId} />;
  } 
  
  return (
      <div>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
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
                value={formData.fullname}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.password}
                onChange={handleInputChange}
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
                type="password"
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
              {isLoading ? <ClipLoader /> : 'Sign up'}
            </button>
          </div>
        </form>
      </div> 
  );
}

export default Signup;
