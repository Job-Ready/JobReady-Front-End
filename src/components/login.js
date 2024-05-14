import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, Route } from "react-router-dom";
import AuthForm from "./google-auth";
import ClipLoader from "./spinner";

axios.defaults.URL = process.env.REACT_APP_URL;

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [errorMessages, setErrorMessages] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("/login", formData);
      console.log(response);
      if (response.status === 200) {
        setErrorMessages("");
        const token = response.data.token;
        const userId = response.data.Id;
        setToken(token);
        localStorage.setItem("User", userId);
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.log("Login failed:", error.message);
      if (error.response.status === 401) {
        setErrorMessages("Invalid email or password");
        setIsLoading(false);
      }
    }
  };

  if (token && token !== null) {
    return (
      <Navigate replace to="/home" userId={userId} setUserId={setUserId} />
    );
  }

  return (
    <div>
      <form className="space-y-6" onSubmit={handleLogin}>
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div className=" text-sm cursor-pointer font-semibold">
          Forgot your password?
        </div>
        {errorMessages && (
          <div className="text-red-600 text-center">{errorMessages}</div>
        )}

        <div>
          {/* Add your login button here */}
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? <ClipLoader /> : "Sign in"}
          </button>
          <div class="flex items-center justify-center my-4">
            <hr class="border-gray-300 w-16" />
            <span class="text-gray-500 font-medium mx-4">Or</span>
            <hr class="border-gray-300 w-16" />
          </div>
          <AuthForm isSignup={false} />
        </div>
      </form>
    </div>
  );
}

export default Login;
