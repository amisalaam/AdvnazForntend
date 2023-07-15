import React from 'react';
import LoadingGif from '../assets/userSide/Booking/Loading3.gif';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img
          className="w-48"
          src={LoadingGif}
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
