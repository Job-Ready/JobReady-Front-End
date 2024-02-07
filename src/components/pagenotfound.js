import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-gray-700 mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
