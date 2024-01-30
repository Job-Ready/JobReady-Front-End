import React from 'react';
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';

function AuthForm() {
  const responseGoogle = (response) => {
    // Handle Google authentication response here
    console.log(response);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="bg-gray-50 ">
          <form className="mt-4">
            {/* Add the "Continue with Google" button */}
            <GoogleLogin
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </form>
      </div>
    </GoogleOAuthProvider>
  );
}

export default AuthForm;
