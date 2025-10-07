import { useState } from "react";
import CV from "../../assets/cv.webp";
import Login from "./Login";
import Register from "./Register";

const LandingPage: React.FC = () => {
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  const renderForm = () => (
    <div className="w-[25rem]">
      <h1 className="text-3xl font-semibold mb-4">
        {isSigningUp
          ? "Create your resume in minutes. Sign up now!"
          : "Welcome back! Sign in to your account."}
      </h1>

      {isSigningUp ? <Register /> : <Login />}

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
      {/* <Header /> */}
      <div className="min-h-screen h-[600px] w-screen mx-0 flex items-center justify-center bg-gray-50">
        <div className="flex items-center justify-center w-[30%] h-full mx-6">
          {renderForm()}
        </div>
        <div className="flex items-center justify-center w-[70%] h-full bg-opacity-25 mb-2 overflow-hidden">
          <img
            src={CV}
            alt="Example of a resume built with our tool"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
