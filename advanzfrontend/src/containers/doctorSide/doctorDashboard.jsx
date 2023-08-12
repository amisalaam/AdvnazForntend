import React, { useEffect, useRef, useState } from "react";
import DoctorDonutChart from "../../components/Doctor/DoctorDonutChart";
import DoctorSidebar from "../../components/Doctor/DoctorSidebar";
import DoctorLatestBooking from "../../components/Doctor/DoctorLatestBooking";
import profile from "../../assets/userSide/Booking/bgBookingImage.jpg";
import notificationAudio from "../../assets/userSide/Booking/notificationSound.wav";
import { IoNotificationsSharp } from "react-icons/io5";
import axios from "axios";
import { logout } from "../../actions/auth";
const API_URL = import.meta.env.VITE_API_URL;
import { connect } from "react-redux";

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

const DoctorDashboard = ({user,logout}) => {
  console.log(user)
  const [messages, setMessages] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (user && user.id && user.is_doctor) {
      const doctorId = user.id;
      const socket = new WebSocket(
        `ws://localhost:8000/ws/doctor/${doctorId}/`
        // wss://advanzbackend.onrender.com/
      );
  
      socket.onopen = () => {
        console.log('WebSocket connection opened');
      };
  
      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message);
        setMessages((prevMessages) => [message, ...prevMessages]);
        setShowNotification(true);
        const audio = new Audio(notificationAudio);
        audio.play();
      };
  
      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        // Handle the error, e.g., show an error message to the user
      };
  
      // Fetch data from the API only once when the WebSocket connection is established
      const fetchUserData = async () => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${localStorage.getItem("access")}`,
              Accept: "application/json",
            },
          };
  
          const res = await axios.get(
            `${API_URL}/doctor/api/get/doctor/notification/${doctorId}/`,
            config
          );
          console.log(res);
          setMessages(res.data); // Update messages with the fetched data
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchUserData();
  
      // Clean up the WebSocket connection when the component unmounts
      return () => {
        socket.close();
      };
    }
  }, [user]);

  

  useEffect(() => {
    if (showNotification) {
      const audio = new Audio(notificationAudio);
      audio.play();
      const notificationTimeout = setTimeout(() => {
        setShowNotification(false);
      }, 9000);

      return () => clearTimeout(notificationTimeout);
    }
  }, [showNotification]);

  const notificationCount = messages.length;

  return (
    <div>
      {showNotification && (
          <div
            className="notification-box fixed top-5 right-5 bg-blue-500 text-white p-4 rounded-lg cursor-pointer"
            onClick={() => setShowNotification(false)}
          >
            New Notification Received!
          </div>
        )}
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
                    <div className="notifications-container overflow-y-auto max-h-[18rem] scroll-hide">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-blue-500 rounded-md p-4 shadow-lg mt-4 transition-all duration-300 hover:bg-blue-600"
                        >
                          <img
                            src={message.profile_picture_url || profile}
                            alt="Profile 1"
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white"
                          />
                          <div className="ml-4">
                            <span className="block text-sm text-white font-semibold">
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

              <div className="flex mt-2 space-x-3 md:mt-2">
                <button
                  type="button"
                  className="text-white bg-advanzBlue hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  w-[7rem]"
                >
                  Edit
                </button>{" "}
                <button
                  type="button"
                  onClick={logout}
                  className="text-white bg-red-900 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  w-[7rem]"
                >
                  Logout
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
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(DoctorDashboard);
