import React, { useEffect, useState } from 'react';
import profile from "../../assets/userSide/Booking/bgBookingImage.jpg";
import { connect } from 'react-redux';
import axios from 'axios';

const DoctorLatestBooking = ({ user }) => {
  const [booking, setBooking] = useState([]);
  console.log(user)
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (user && user.is_doctor) {
      const fetchData = async () => {
        try {
          const apiUrl = `${API_URL}/doctor/api/get/dashboard/appointment/${user.id}/`;
          const response = await axios.get(apiUrl);
          console.log("API Response:", response.data); 
          setBooking(response.data);
        } catch (err) {
          console.error("Error fetching booked booking:", err);
        }
      };
      fetchData();
    }
  }, [user]);

  return (
    <div className="max-w-[60rem] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 m-5">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">Latest Booking</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {booking.slice(0, 4).map((bookingItem) => (
            
            <li key={bookingItem.id} className="py-3 sm:py-4 my-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={`${API_URL}${bookingItem.doctor_image}`} alt='' />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{bookingItem.doctor_name}</p>
                  <p className="text-sm text-gray-500 truncate">{bookingItem.doctor_email}</p>
                  <div className="flex space-x-4 text-xs text-gray-500">
                    {/* <p>Department: {bookingItem.department}</p> */}
                    <p>Patient: {bookingItem.patient_name}</p>
                    <p className='text-red-900 text-sm'>Status: {bookingItem.status}</p>
                  </div>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">Id : {bookingItem.id}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(DoctorLatestBooking);
