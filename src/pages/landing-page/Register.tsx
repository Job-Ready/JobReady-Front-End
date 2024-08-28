import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { getAccessToken, setAccessToken } from "@utils/auth";
import { ClipLoader } from "react-spinners";

// Set up axios defaults correctly
axios.defaults.baseURL = process.env.REACT_APP_URL;

const Register: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(getAccessToken());
  const [formData, setFormData] = useState<{
    fullname: string;
    email: string;
    password: string;
    confirmpassword: string;
  }>({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errorMessages, setErrorMessages] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (formData.password !== formData.confirmpassword) {
      setErrorMessages("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("/signup", formData);
      const { token, Id } = response.data;
      setToken(token);
      setUserId(Id);
      localStorage.setItem("User", Id);
      setAccessToken(token);
      setErrorMessages("");
    } catch (error: any) {
      console.error(
        "Signup failed:",
        error.response?.data?.error || error.message
      );
      setErrorMessages("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (token) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={handleSignup}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="fullname" className="sr-only">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              autoComplete="name"
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
            <label htmlFor="confirmpassword" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              value={formData.confirmpassword}
              onChange={handleInputChange}
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        {errorMessages && (
          <div className="text-red-600 text-center">{errorMessages}</div>
        )}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? <ClipLoader /> : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
