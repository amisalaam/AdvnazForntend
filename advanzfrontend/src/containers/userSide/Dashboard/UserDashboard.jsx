import React, { useEffect, useState } from "react";
import UserSidebar from "../../../components/user/UserSidebar";
import profile from "../../../assets/userSide/Booking/bgBookingImage.jpg";
import {logout} from "../../../actions/auth"
import UserLatestBooking from "../../../components/user/UserLatestBooking";
import UserDonutChart from "../../../components/user/UserDonutChart";
import { connect } from "react-redux";

const AnimatedNumber = ({ initialValue, finalValue }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  
  useEffect(() => {
    const step = Math.ceil((finalValue - initialValue) / 200);
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

const UserDashboard = ({logout}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <UserSidebar />
      <div className=" md:h-[40rem] flex-1">
        <div className="grid gap-7   md:grid-cols-3">
          <div className="bg-gradient-to-br from-pink-700 via-pink-300 to-pink-700 h-[6rem] md:w-[15rem] rounded-md m-5">
            <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
              Pending Appointment
            </h2>
            <AnimatedNumber initialValue={0} finalValue={36} />
          </div>

          <div className="bg-gradient-to-br from-emerald-900 via-emerald-300 to-emerald-800 h-[6rem] md:w-[15rem] rounded-md m-5">
            <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
              Completed Appointment
            </h2>
            <AnimatedNumber initialValue={0} finalValue={28} />
          </div>

          <div className="bg-gradient-to-br from-indigo-900 via-blue-300 to-indigo-800 h-[6rem] md:w-[15rem] rounded-md m-5">
            <h2 className="text-white ml-5 mt-3 font-bold text-1xl">
              Visited Doctors
            </h2>
            <AnimatedNumber initialValue={0} finalValue={34} />
          </div>
        </div>

        <UserLatestBooking />
      </div>
      <div className="mt-5 md:flex-2">
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow w-full mx-auto md:w-[20rem] md:mx-0 md:mr-4">
          <div className="flex justify-end px-5 pt-5">
            {/* Add any additional content here */}
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
                className="text-white bg-red-900 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  w-[7rem]"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <UserDonutChart />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
 
 
});
export default connect(mapStateToProps, { logout })(UserDashboard);

