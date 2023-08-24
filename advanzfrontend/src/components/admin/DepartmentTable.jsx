import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import profile from "../../assets/userSide/Booking/bgBookingImage.jpg";
import AddDepartmentModal from "./AddDepartmentModal";
import { toast } from "react-toastify";

const DepartmentTable = ({ user }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const ITEMS_PER_PAGE = 6; // Change this value to set the number of users per page

  const [department, setDepartment] = useState([]);
  const [addingModalOpen, setAddingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (user && user.is_superuser) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/myadmin/api/get/all/department/`
          );
          setDepartment(response.data);
          console.log(response.data);
        } catch (err) {
          console.error("Error fetching department:", err);
        }
      };
      fetchData();
    }
  }, [user]);

  const handleAddDepartmentModalOpen = () => {
    setAddingModalOpen(true);
  };

  const handleAddDepartmentClose = () => {
    setAddingModalOpen(false);
  };
  const handleAddDepartment = (newDepartment) => {
    setDepartment((prevDepartments) => [...prevDepartments, newDepartment]);
  };

  const handleDelete = async (departmentId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this Department?"
    );
  
    if (shouldDelete) {
      try {
        await axios.delete(
          `${API_URL}/myadmin/api/delete/department/${departmentId}/`
        );
  
        // Remove the deleted department from the state
        setDepartment((prevDepartments) =>
          prevDepartments.filter((department) => department.id !== departmentId)
        );
  
        toast.success("Department deleted successfully!");
      } catch (error) {
        console.error("Error deleting Department:", error);
        toast.error("Department deleted failed!");
      }
    }
  };

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginateddepartment = department
    .filter((user) => {
      const nameMatches = user.department_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return nameMatches;
    })
    .slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center bg-acontent flex-grow  p-4">
      <div className="mx-auto p-4 bg-white shadow-xl rounded-xl lg:w-full">
        <div className="bg-white px-3 rounded-xl">
          <button
            onClick={handleAddDepartmentModalOpen}
            className="m-4 text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none"
          >
            Add New Departments
          </button>
          <div className="w-full p-5 flex flex-col sm:flex-row justify-between">
            <h1 className="text-3xl text-start  sm:mb-0">Departments</h1>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="&#x1F50D; Search"
                className="border border-primaryBlue border-solid focus:outline-none px-2 w-full rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                      <th className="px-6 py-3 text-lg text-gray-900  ">
                        Department Name
                      </th>

                      <th className="px-6 py-3 text-lg text-gray-900  ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {paginateddepartment?.length > 0 ? (
                      paginateddepartment?.map((user, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                          {/* department Name */}
                          <th className="flex flex-col gap-3 sm:flex-row items-start sm:items-center px-6 py-3 text-base text-gray-900">
                            <div className="relative h-10 w-10">
                              {user?.department_profile_image ? (
                                <img
                                  className="h-full w-full rounded-full object-cover object-center"
                                  src={`${API_URL}${user?.department_profile_image}`}
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
                              <div className=" text-gray-700">
                                {user?.department_name}
                              </div>
                              <div className="text-gray-400">{user?.email}</div>
                            </div>
                          </th>
                          {/* Status */}

                          {/* Action */}
                          <td>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="3"
                          className="px-6 py-3 text-center text-red-500 font-bold"
                        >
                          No related department found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {addingModalOpen && (
            <AddDepartmentModal
              isOpen={addingModalOpen}
              onClose={handleAddDepartmentClose}
              onDepartmentAdded={handleAddDepartment}
            />
          )}
        </div>
        {department?.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center my-5">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(department.length / ITEMS_PER_PAGE)}
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

export default connect(mapStateToProps)(DepartmentTable);
