import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-8 border-t-8 border-yellow-500 border-solid rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default LoadingSpinner;
