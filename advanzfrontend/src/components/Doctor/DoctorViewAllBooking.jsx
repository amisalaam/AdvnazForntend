import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import profile from "../../assets/userSide/Booking/bgBookingImage.jpg";

const ViewAllBookingTable = ({ user }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const ITEMS_PER_PAGE = 6; // Change this value to set the number of booking per page

  const [booking, setBooking] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'booked', or 'unbooked'
  const [selectedDate, setSelectedDate] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    if (user && user.is_doctor) {
      const fetchData = async () => {
        try {
          const apiUrl = `${API_URL}/doctor/api/get/dashboard/appointment/${user.id}/`;
          const response = await axios.get(apiUrl);
          setBooking(response.data);
        } catch (err) {
          console.error("Error fetching booked booking:", err);
        }
      };
      fetchData();
    }
  }, [user]);

  const handleRejectAppointment = async (appointmentId) => {
    
  
    if (!user?.is_doctor) {
      return; // Exit early if the user is not a superuser
    }
  
    // Show a confirmation dialog
    const confirmed = window.confirm("Are you sure you want to reject this appointment?");
    if (!confirmed) {
      return; // Exit if not confirmed
    }
  
    const apiUrl = `${API_URL}/doctor/api/reject/appointment/${appointmentId}/`;
  
    try {
      const response = await axios.patch(apiUrl);
  
      if (response.status === 200) {
        // Update the booking data in state to reflect the status change
        setBooking(prevBookings => prevBookings.map(bookingItem => {
          if (bookingItem.id === appointmentId) {
            return { ...bookingItem, status: "rejected" };
          }
          return bookingItem;
        }));
  
        toast.success("Appointment rejected Successfully");
      } else {
        toast.error("Appointment reject Failed");
      }
    } catch (error) {
      console.error("Error rejecting appointment:", error);
      toast.error("An error occurred while rejecting the appointment");
    }
  };
  

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedbooking = booking
    ? booking
        .filter((user) => {
          const nameMatches = user.doctor_name
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());
          const startTimeMatches =
            startTime === "" ||
            (user.start_time && user.start_time?.localeCompare(startTime) >= 0);
          const endTimeMatches =
            endTime === "" ||
            (user.end_time && user.end_time?.localeCompare(endTime) <= 0);
          const dateMatches = !selectedDate || user.date === selectedDate;
          if (filter === "booked") return user.is_booked;
          if (filter === "unbooked")
            return user.hasOwnProperty("is_booked") && !user.is_booked;
          return (
            nameMatches && startTimeMatches && endTimeMatches && dateMatches
          );
        })
        .slice(offset, offset + ITEMS_PER_PAGE)
    : [];

  return (
    <div className="flex flex-col items-center bg-acontent flex-grow  p-4">
      <div className="mx-auto p-4 bg-white shadow-xl rounded-xl lg:w-full">
        <div className="bg-white px-3 rounded-xl">
          <div className="w-full p-5 flex flex-col sm:flex-row justify-between">
            <h1 className="text-3xl text-start sm:mb-0">View booking</h1>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="&#x1F50D; Search"
                className="border border-primaryBlue border-solid focus:outline-none px-2 w-full sm:w-1/4 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <input
                type="time"
                className="border border-primaryBlue border-solid focus:outline-none px-2 w-full sm:w-1/4 rounded-lg"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <input
                type="time"
                className="border border-primaryBlue border-solid focus:outline-none px-2 w-full sm:w-1/4 rounded-lg"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              <input
                type="date"
                className="border border-primaryBlue border-solid focus:outline-none px-2 w-full sm:w-1/4 rounded-lg"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
             
             
            </div>
          </div>
          <div className="overflow-x-auto overflow-y-auto w-full">
            <div className="w-full">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  {/* Table Headers */}
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-lg text-gray-900"
                      >
                        Doctor Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-lg text-gray-900 hidden md:table-cell text-center"
                      >
                        Patient
                      </th>{" "}
                      <th
                        scope="col"
                        className="px-6 py-3 text-lg text-gray-900 hidden md:table-cell text-center"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-lg text-gray-900 hidden md:table-cell text-center"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-lg text-gray-900 hidden md:table-cell"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-lg text-gray-900"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {paginatedbooking.length > 0 ? (
                      paginatedbooking.map((user, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                          {/* booking Name */}
                          <th className="flex flex-col gap-3 sm:flex-row items-start sm:items-center px-6 py-3 text-base text-gray-900">
                            <div className="relative h-10 w-10">
                              {user?.doctor_image ? (
                                <img
                                  className="h-full w-full rounded-full object-cover object-center"
                                  src={`${API_URL}${user?.doctor_image}`}
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
                            <div className="text-sm">
                              <div className="font-medium text-gray-700">
                                {user?.doctor_name}
                              </div>
                              <div className="text-gray-400">
                                {user?.doctor_email}
                              </div>
                            </div>
                          </th>
                          {/* Time */}
                          <td className="px-6 py-3 hidden md:table-cell text-center">
                            <span className="text-gray-700">
                              {user?.patient_name}
                            </span>
                          </td>
                          <td className="px-6 py-3 hidden md:table-cell text-center">
                            <span className="font-medium text-gray-700">
                              {user?.start_time}
                            </span>
                            <span className="text-center"> to </span>
                            <span className="text-gray-700">
                              {user?.end_time}
                            </span>
                          </td>

                          <td className="px-6 py-3 hidden md:table-cell text-center">
                            <span className="text-gray-700">{user?.date}</span>
                          </td>
                          {/* Status */}
                          <td className="px-6 py-3 hidden md:table-cell">
                            {user?.status === "approved" ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
                                {user?.status}
                              </span>
                            ) : user?.status === "rejected" ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-700"></span>
                                {user?.status}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-700"></span>
                                {user?.status}
                              </span>
                            )}
                          </td>
                          {/* Action */}
                          <td className="px-6 py-3">
                            <div className="flex justify-center sm:justify-start">
                              {user?.status =="approved"? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleRejectAppointment(user.id)
                                  }
                                  className="custom-btn text-white bg-red-800 hover:bg-red-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-[6rem]"
                                >
                                  Reject
                                </button>
                              ) : (
                                <button
                                type="button"
                                className="custom-btn text-gray-500 bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-[6rem] cursor-not-allowed"
                                disabled
                              >
                               Reject
                              </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="3"
                          className="px-6 py-3 text-center text-red-500 font-bold"
                        >
                          No related booking found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {booking?.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center my-5">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(booking.length / ITEMS_PER_PAGE)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={
                "pagination flex justify-center mt-4 space-x-2"
              }
              subContainerClassName={"pages pagination space-x-2"}
              activeClassName={"bg-blue-500 text-white"}
              previousClassName={"px-3 py-2 border rounded-lg border-gray-300"}
              nextClassName={"px-3 py-2 border rounded-lg border-gray-300"}
              pageClassName={"px-3 py-2 border rounded-lg border-gray-300"}
              breakClassName={"px-3 py-2 border rounded-lg border-gray-300"}
              pageLinkClassName={"text-blue-500"}
              activeLinkClassName={"bg-blue-500 text-white"}
              previousLinkClassName={"text-gray-600"}
              nextLinkClassName={"text-gray-600"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ViewAllBookingTable);
