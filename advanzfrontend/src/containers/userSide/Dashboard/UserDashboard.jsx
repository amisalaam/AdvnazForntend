import React from "react";
import UserSidebar from "../../../components/user/UserSidebar";
import DashboardChart from "../../../components/user/DashboardChart";
import profile from "../../../assets/userSide/Booking/bgBookingImage.jpg";
import DonutChart from "../../../components/user/dounutChart";

// Register the required scales and elements with Chart.js

const UserDashboard = () => {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="b h-[40rem] flex-1">
        <div className="grid grid-cols-3">
          <div className="bg-black h-[6rem] w-[10 rem] rounded-md m-6">
            <h2 className="text-white text-center p-5">Total Appointment</h2>
          </div>
          <div className="bg-black h-[6rem] w-[10 rem] rounded-md m-6">
          <h2 className="text-white text-center p-5">Upcoming Appointment</h2>
          </div>
          <div className="bg-black h-[6rem] w-[10 rem] rounded-md m-6">
          <h2 className="text-white text-center p-5">Visited Doctors</h2>
          </div>
        </div>
      
        <DashboardChart />
      
        
        
      
      </div>
      <div className="b  flex-2 ">
        <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow w-[20rem] ">
          <div className="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100  "
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={profile}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:text-white dark:border-gray-600  dark:hover:border-gray-700 "
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
