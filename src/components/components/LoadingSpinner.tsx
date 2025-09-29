import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader />
    </div>
  );
};

export default LoadingSpinner;
