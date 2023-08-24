import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import profile from "../../assets/userSide/Booking/bgBookingImage.jpg"

const AdminLatestBooking = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [latestAppointments, setLatestAppointments] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/myadmin/api/get/dashboard/appointment/`)
      .then(response => {
        console.log(response.data)
        const fetchedAppointments = response.data;
        setLatestAppointments(fetchedAppointments.slice(0, 5)); // Select the first 5 appointments
      })
      .catch(error => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <div className="max-w-[60rem] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 m-5">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">Latest 5 Bookings</h5>
        <Link to='/admin/dashboard/booking' className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </Link>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {latestAppointments.map(appointment => (
            <li key={appointment.id} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-10 w-10">
                  {appointment?.doctor_image ? (
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={`${API_URL}${appointment?.doctor_image}`}
                      alt="avatar"
                    />
                  ) : (
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={profile}
                      alt="avatar"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{appointment.doctor_name}</p>
                  <p className="text-sm text-gray-500 truncate">{appointment.doctor_email}</p>
                  <div className="flex space-x-4 text-xs text-gray-500">
                    <p>Department: {appointment.department}</p>
                    <p>Patient: {appointment.patient_name}</p>
                    <p className='text-red-900 text-sm'>Status: {appointment.status}</p>

                  </div>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">Id: {appointment.id}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminLatestBooking;
