import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import profile from "../../assets/userSide/Booking/bgBookingImage.jpg";

const ViewAllUsers = ({ user }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const ITEMS_PER_PAGE = 6; // Change this value to set the number of users per page

  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (user && user.is_superuser) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/myadmin/api/get/all/users/`
          );
          setUsers(response.data);
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [user]);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const toggleUserStatus = async (userId, is_active) => {
    try {
      await axios.patch(`${API_URL}/myadmin/api/block/users/${userId}/`, {
        is_active: !is_active, // Toggle the is_active flag
      });
      // Update the users state to reflect the changes
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, is_active: !is_active } : user
        )
      );
    } catch (err) {
      console.error("Error toggling user status:", err);
    }
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center bg-acontent flex-grow  p-4">
      <div className="mx-auto p-4 bg-white shadow-xl rounded-xl lg:w-full">
        <div className="bg-white px-3 rounded-xl">
          <div className="w-full p-5 flex flex-col sm:flex-row justify-between">
            <h1 className="text-3xl text-start  sm:mb-0">Users List</h1>
            <input
              type="text"
              placeholder="&#x1F50D; Search email or name"
              className="border border-primaryBlue border-solid focus:outline-none px-2 w-full sm:w-1/4 rounded-lg"
            />
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
                        className="px-6 py-3  text-lg text-gray-900"
                      >
                        users Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3  text-lg text-gray-900 hidden md:table-cell"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3  text-lg text-gray-900"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {paginatedUsers?.length > 0 ? (
                      paginatedUsers?.map((user, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                          {/* users Name */}
                          <th className="flex flex-col gap-3 sm:flex-row items-start sm:items-center px-6 py-3  text-base text-gray-900">
                            <div className="relative h-10 w-10">
                              {user?.users_profile_image ? (
                                <img
                                  className="h-full w-full rounded-full object-cover object-center"
                                  src={`${API_URL}${user?.users_profile_image}`}
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
                                {user?.name}
                              </div>
                              <div className="text-gray-400">{user?.email}</div>
                            </div>
                          </th>
                          {/* Status */}
                          <td className="px-6 py-3  hidden md:table-cell">
                            {user?.is_active ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
                                Active
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-700"></span>
                                Blocked
                              </span>
                            )}
                          </td>
                          {/* Action */}
                          <td className="px-6 py-3 ">
                            <div className="flex justify-center sm:justify-start">
                              {user?.is_active ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleUserStatus(user.id, user.is_active)
                                  } 
                                  className="custom-btn text-white bg-red-800 hover:bg-red-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-[6rem]"
                                >
                                  Block
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleUserStatus(user.id, user.is_active)
                                  } 
                                  className="custom-btn text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-[6rem]"
                                >
                                  Unblock
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
                          className="px-6 py-3  text-center text-red-500 font-bold"
                        >
                          No related Users found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {users?.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center my-5">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(users.length / ITEMS_PER_PAGE)}
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

export default connect(mapStateToProps)(ViewAllUsers);
