import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import AuthForm from "./google-auth";
import ClipLoader from "./spinner";
import { setAccessToken, getAccessToken } from "../utils/auth";

// Set up axios defaults correctly
axios.defaults.baseURL = process.env.REACT_APP_URL;

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(getAccessToken());
  const [errorMessages, setErrorMessages] = useState<string>("");
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  useEffect(() => {
    // Clear any existing error messages when formData changes
    setErrorMessages("");
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/login", formData);
      if (response.status === 200) {
        const { token } = response.data;
        const id = response.data.user.id;
        setToken(token);
        setUserId(id);
        localStorage.setItem("User", id);
        setAccessToken(token);
        setErrorMessages("");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setErrorMessages("Invalid email or password");
      } else {
        setErrorMessages("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (token) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div>
      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm -space-y-px">
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
        <div className="text-sm cursor-pointer font-semibold">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
        {errorMessages && (
          <div className="text-red-600 text-center">{errorMessages}</div>
        )}
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? <ClipLoader /> : "Sign in"}
          </button>
          <div className="flex items-center justify-center my-4">
            <hr className="border-gray-300 w-16" />
            <span className="text-gray-500 font-medium mx-4">Or</span>
            <hr className="border-gray-300 w-16" />
          </div>
          <AuthForm />
        </div>
      </form>
    </div>
  );
};

export default Login;
