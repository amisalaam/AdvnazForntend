import React from 'react';
import LoadingGif from '../assets/userSide/Booking/Loading.gif';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <img
          className="w-48 "
          src={LoadingGif}
          alt="Loading..."
        />
        <p className="text-advanzBlue text-lg mt-4 font-semibold">
          <span className="animate-bounce">Wait,</span> I am coming
          <span className="animate-pulse inline-block">
            <span className="dot dot1 text-red-700">&#8226;</span>
            <span className="dot dot2 text-green-700">&#8226;</span>
            <span className="dot dot3 text-blue-700">&#8226;</span>
            <span className="dot dot4 text-purple-700">&#8226;</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoadingComponent;
