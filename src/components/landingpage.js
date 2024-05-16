import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import Header from "./header.js";
import CV from "../assets/cv.webp";

const LandingPage = () => {
  const [userId, setUserId] = useState(null);
  const [component, setComponent] = useState(<SignUp />);
  const changeComponent = (component) => {
    setComponent(component);
  };

  const [token, setToken] = useState(localStorage.getItem("token"));
  if (token && token !== null) {
    return <Navigate replace to="/home" />;
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen h-[600px] w-screen mx-0 flex items-center justify-center bg-gray-50">
        <div className="flex items-center justify-center w-[30%] h-full mx-6">
          <div className="">
            {component.type === SignUp ? (
              <div className="w-[25rem]">
                <div>
                  <h1 className="text-3xl font-semibold mb-4">
                    Create your resume in minutes. Sign up now!
                  </h1>
                </div>
                <SignUp />
                <p className="mt-2 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => changeComponent(<Login />)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            ) : (
              <div className="w-[25rem]">
                <div>
                  <h1 className="text-3xl font-semibold mb-4">
                    Welcome back! Sign in to your account.
                  </h1>
                </div>
                <Login />
                <p className="mt-2 text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => changeComponent(<SignUp />)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-[70%] h-full bg-opacity-25 mb-2">
          <div className="">
            <img src={CV} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
