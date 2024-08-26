import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="spinner ">
      <ClipLoader color="#ffffff" size='15' />
    </div>
  );
};

export default LoadingSpinner;
