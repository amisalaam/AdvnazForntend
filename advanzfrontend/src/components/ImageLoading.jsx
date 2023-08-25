import React from 'react';

const ImageLoadingComponent = () => {
  const numLoadingComponents = 4; // Number of times to repeat the loading component

  return (
    <div className="flex space-x-10 m-8 overflow-hidden mx-20">
      {Array.from({ length: numLoadingComponents }).map((_, index) => (
        <div key={index} className="max-w-sm rounded animate-pulse ">
          <div className="flex items-center justify-center h-[15rem] mb-4 bg-gray-300 rounded "></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-[20rem] mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full"></div>
          <div className="flex items-center mt-4 space-x-3">
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageLoadingComponent;
