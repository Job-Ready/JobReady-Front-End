import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import Header from "./header.js";
import CV from "../assets/cv.webp";
import { checkIsAuthenticated } from "../utils/auth";

const LandingPage: React.FC = () => {
  // const [userId, setUserId] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(checkIsAuthenticated());

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(checkIsAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const renderForm = () => (
    <div className="w-[25rem]">
      <h1 className="text-3xl font-semibold mb-4">
        {isSigningUp ? "Create your resume in minutes. Sign up now!" : "Welcome back! Sign in to your account."}
      </h1>

      {isSigningUp ? <SignUp /> : <Login />}

      <p className="mt-2 text-center text-sm text-gray-600">
        {isSigningUp ? (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setIsSigningUp(false)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button
              onClick={() => setIsSigningUp(true)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </button>
          </>
        )}
      </p>
    </div>
  );

  return (
    <div>
      <Header />
      <div className="min-h-screen h-[600px] w-screen mx-0 flex items-center justify-center bg-gray-50">
        <div className="flex items-center justify-center w-[30%] h-full mx-6">
          {renderForm()}
        </div>
        <div className="flex items-center justify-center w-[70%] h-full bg-opacity-25 mb-2">
          <img src={CV} alt="Example of a resume built with our tool" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
