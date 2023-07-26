import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminDashboardLineChart from "../../components/admin/AdminDashboardLineChart";
import AdminDonutChart from "../../components/admin/AdminDonutChart";
import AdminLatestBooking from "../../components/admin/AdminLatestBooking";
import profile from "../../assets/userSide/Booking/bgBookingImage2.jpg";

import { IoNotificationsSharp } from "react-icons/io5";

const AnimatedNumber = ({ initialValue, finalValue }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    const step = Math.ceil((finalValue - initialValue) / 100);
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => {
        const newValue = prevValue + step;
        return newValue >= finalValue ? finalValue : newValue;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [initialValue, finalValue]);

  return (
    <h2 className="text-white mt-3 ml-5 text-4xl font-bold">{currentValue}</h2>
  );
};

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const notificationCount = 2;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const socket = new WebSocket(
      "ws://localhost:8000/ws/superuser-notifications/"
    ); // Replace with your backend WebSocket URL for NotificationConsumer

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
        <AdminSidebar />
        <div className="md:h-[40rem] flex-1">
          <div className="grid gap-7 md:grid-cols-3">
            <div className="bg-gradient-to-bl from-pink-700 via-pink-400 to-pink-700 h-[6rem] md:w-[15rem] rounded-md m-5">
              <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
                Total Doctors
              </h2>
              <AnimatedNumber initialValue={0} finalValue={36} />
            </div>

            <div className="bg-gradient-to-bl from-indigo-900 via-blue-400 to-indigo-800 h-[6rem] md:w-[15rem] rounded-md m-5">
              <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
                Total Patients
              </h2>
              <AnimatedNumber initialValue={0} finalValue={36} />
            </div>

            <div className="bg-gradient-to-bl from-emerald-900 via-emerald-400 to-emerald-800 h-[6rem] md:w-[15rem] rounded-md m-5">
              <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
                Total Appointments
              </h2>
              <AnimatedNumber initialValue={0} finalValue={36} />
            </div>
          </div>

          <AdminDashboardLineChart />
          <AdminLatestBooking />
        </div>
        <div className="mt-5 md:flex-2">
          <div className="max-w-sm border border-gray-200 rounded-lg shadow w-full mx-auto md:w-[20rem] md:mx-0 md:mr-4 ">
            <div className="flex justify-end px-5 pt-5">
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
                            src={message.profile_picture_url || profile}
                            alt="Profile 1"
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
                className="w-24 h-24 mb-2 rounded-full shadow-lg"
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

              <div className="flex mt-2 space-x-3 md:mt-2">
                <button
                  type="button"
                  className="text-white bg-advanzBlue hover:bg-advanzRed focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  w-[8rem]"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <AdminDonutChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
