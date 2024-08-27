import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function AuthForm() {
  const responseGoogle = (response) => {
    // Handle Google authentication response here
    console.log(response);
  };

  const handleError = () => {
    // Handle errors here
    console.log("Error during Google authentication");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="bg-gray-50 ">
        <form className="mt-4">
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={handleError}
            // Note: The `cookiePolicy` prop is no longer required in recent versions.
          />
        </form>
      </div>
    </GoogleOAuthProvider>
  );
}

export default AuthForm;
