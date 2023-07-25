import React from 'react';
import profile from "../../assets/userSide/Booking/bgBookingImage.jpg";

const UserLatestBooking = () => {
  return (
    <div className=" max-w-[60rem] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 m-5">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">Latest Booking</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4 my-3">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={profile} alt="Neil image" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Neil Sims</p>
                <p className="text-sm text-gray-500 truncate">email@windster.com</p>
                <div className="flex space-x-4 text-xs text-gray-500">
                  <p>Department: General</p>
                  <p>Gender: Male</p>
                  <p>Locality: India</p>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">$320</div>
            </div>
          </li> <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={profile} alt="Neil image" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Neil Sims</p>
                <p className="text-sm text-gray-500 truncate">email@windster.com</p>
                <div className="flex space-x-4 text-xs text-gray-500">
                  <p>Department: General</p>
                  <p>Gender: Male</p>
                  <p>Locality: India</p>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">$320</div>
            </div>
          </li> <li className="py-3 sm:py-4 my-3">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={profile} alt="Neil image" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Neil Sims</p>
                <p className="text-sm text-gray-500 truncate">email@windster.com</p>
                <div className="flex space-x-4 text-xs text-gray-500">
                  <p>Department: General</p>
                  <p>Gender: Male</p>
                  <p>Locality: India</p>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">$320</div>
            </div>
          </li> <li className="py-3 sm:py-4 my-3">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={profile} alt="Neil image" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Neil Sims</p>
                <p className="text-sm text-gray-500 truncate">email@windster.com</p>
                <div className="flex space-x-4 text-xs text-gray-500">
                  <p>Department: General</p>
                  <p>Gender: Male</p>
                  <p>Locality: India</p>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">$320</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserLatestBooking;
