import React, { useEffect, useState } from "react";
import DoctorDonutChart from "../../components/Doctor/DoctorDonutChart";
import DoctorSidebar from "../../components/Doctor/DoctorSidebar";
import DoctorLatestBooking from "../../components/Doctor/DoctorLatestBooking";
import profile from "../../assets/userSide/Booking/bgBookingImage2.jpg";
import { IoNotificationsSharp } from "react-icons/io5";
import axios from "axios";

const AnimatedNumber = ({ initialValue, finalValue }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    const step = Math.ceil((finalValue - initialValue) / 60); // Adjust the speed of the animation here
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => {
        const newValue = prevValue + step;
        return newValue >= finalValue ? finalValue : newValue;
      });
    }, 20); // Adjust the interval here to change animation smoothness

    return () => clearInterval(interval);
  }, [initialValue, finalValue]);

  return (
    <h2 className="text-white mt-3 ml-5 text-4xl font-bold">{currentValue}</h2>
  );
};

const DoctorDashboard = () => {
  const [messages, setMessages] = useState([]);

  const notificationCount = 2;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/doctor/${3}/`); 

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      setMessages((prevMessages) => [message, ...prevMessages]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <DoctorSidebar />
        <div className="md:h-[40rem] flex-1">
          <div className="grid gap-7 md:grid-cols-3">
            <div className="bg-gradient-to-br from-pink-700 via-pink-300 to-pink-700 h-[6rem] md:w-[15rem] rounded-md m-5">
              <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
                Pending Appointment
              </h2>
              <AnimatedNumber initialValue={0} finalValue={36} />
            </div>

            <div className="bg-gradient-to-br from-emerald-900 via-emerald-300 to-emerald-800 h-[6rem] md:w-[15rem] rounded-md m-5">
              <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
                Pending Appointment
              </h2>
              <AnimatedNumber initialValue={0} finalValue={36} />
            </div>

            <div className="bg-gradient-to-br from-indigo-900 via-blue-300 to-indigo-800 h-[6rem] md:w-[15rem] rounded-md m-5">
              <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
                Pending Appointment
              </h2>
              <AnimatedNumber initialValue={0} finalValue={36} />
            </div>
          </div>

          <DoctorLatestBooking />
        </div>
        <div className="mt-5 md:flex-2">
          <div className="max-w-sm border border-gray-200 rounded-lg shadow w-full mx-auto md:w-[20rem] md:mx-0 md:mr-4">
            <div className="flex justify-end px-5 pt-5">
              {/* Add any additional content here */}
              <div className="relative">
                <IoNotificationsSharp
                  size={30}
                  className="text-blue-500 cursor-pointer"
                  onClick={handleNotificationClick}
                />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 text-white px-2 text-xs">
                    {notificationCount}
                  </span>
                )}

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-[25rem] bg-divide-y divide-gray-100 rounded-md z-10">
                    {/* Replace this dummy content with your actual notifications */}
                    <div className="notifications-container overflow-y-auto max-h-[18rem] scorll-hide">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-blue-500 rounded-md p-4 shadow-lg mt-4"
                        >
                          <img
                            src={message.profile_picture_url || profile }                            alt="Profile 1"
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white"
                          />
                          <div className="ml-4">
                            <span className="block text-sm text-white">
                              {message.timestamp}
                            </span>
                            <p className="text-sm text-gray-100 mt-2">
                              {message.message}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={profile}
                alt="Profile"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-500">
                Username
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Country: India
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Age: 30
              </span>

              <div className="flex mt-4 space-x-3 md:mt-4">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[8rem]"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <DoctorDonutChart />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
