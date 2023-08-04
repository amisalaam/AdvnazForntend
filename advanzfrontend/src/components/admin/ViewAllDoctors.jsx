import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import DoctorModal from "./DoctorDetailsModal";
import AddDoctorModal from "./AddDoctorModal";
import ReactPaginate from "react-paginate";

const ViewAllDoctors = ({ user }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [addingModalOpen, setAddingModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const doctorsPerPage = 5;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(offset, offset + doctorsPerPage);

  const handleViewMoreClick = (doctor) => {
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddDoctorModalOpen = () => {
    setAddingModalOpen(true);
  };

  const handleAddDoctorModalClose = () => {
    setAddingModalOpen(false);
  };

  const handleAddDoctor = (newDoctor) => {
    setDoctors((prevDoctors) => [...prevDoctors, newDoctor]);
    setFilteredDoctors((prevFilteredDoctors) => [
      ...prevFilteredDoctors,
      newDoctor,
    ]);
  };

  useEffect(() => {
    if (user && user.is_superuser) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/myadmin/api/get/all/doctors/`
          );
          setDoctors(response.data);
          setFilteredDoctors(response.data);
          console.log(response.data)
          setLoading(false);
        } catch (err) {
          setError(
            err.message || "An error occurred while fetching data."
          );
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    const filteredResults = doctors.filter((doctor) => {
      const nameMatch = doctor?.user?.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const emailMatch = doctor?.user?.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const departmentMatch = doctor?.department?.department_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch || emailMatch || departmentMatch;
    });

    setFilteredDoctors(filteredResults);
  }, [searchQuery, doctors]);

  

  return (
    <div className="flex flex-col items-center bg-acontent  p-4">
      <div className="mx-auto p-4 bg-white shadow-xl rounded-xl lg:w-[75rem]">
        <div className="bg-white px-3 rounded-xl">
          <button
            onClick={handleAddDoctorModalOpen}
            className="m-4 text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none"
          >
            Add New Doctors
          </button>
          <div className="w-full p-5 flex flex-col sm:flex-row justify-between">
            <h1 className="text-3xl text-start  sm:mb-0">Doctors List</h1>
            <input
              type="text"
              placeholder="&#x1F50D; Search email or name"
              className="border border-primaryBlue border-solid focus:outline-none px-2 w-full sm:w-1/4 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto overflow-y-auto w-full">
            <div className="w-full">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-lg text-gray-900"
                      >
                        Doctor Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-lg text-gray-900 hidden md:table-cell"
                      >
                        Department
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-lg text-gray-900 hidden md:table-cell"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-lg text-gray-900"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {currentDoctors?.length > 0 ? (
                      currentDoctors?.map((doctor, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                          <th
                            className="flex flex-col gap-3 sm:flex-row items-start sm:items-center px-6 py-4 text-base text-gray-900"
                          >
                            <div className="relative h-10 w-10">
                              {doctor?.doctor_profile_image ? (
                                <img
                                  className="h-full w-full rounded-full object-cover object-center"
                                  src={`${API_URL}${doctor?.doctor_profile_image}`}
                                  alt="avatar"
                                />
                              ) : (
                                <img
                                  className="h-full w-full rounded-full object-cover object-center"
                                  src=""
                                  alt="avatar"
                                />
                              )}
                            </div>
                            <div className="text-sm">
                              <div className="font-medium text-gray-700">
                                {doctor?.user?.name}
                              </div>
                              <div className="text-gray-400">
                                {doctor?.user?.email}
                              </div>
                            </div>
                          </th>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <p>{doctor?.department?.department_name}</p>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            {doctor?.user.is_active ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                Active
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                                Blocked
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-center sm:justify-start">
                              <button
                                type="button"
                                onClick={() => handleViewMoreClick(doctor)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                              >
                                View More
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-6 py-4 text-center text-red-500 font-bold"
                        >
                          No related doctors found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <DoctorModal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            doctor={selectedDoctor}
          />
          {addingModalOpen && (
            <AddDoctorModal
              isOpen={addingModalOpen}
              onClose={handleAddDoctorModalClose}
              onDoctorAdded={handleAddDoctor}
            />
          )}

          {/* Pagination */}
          <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={Math.ceil(filteredDoctors.length / doctorsPerPage)}
      onPageChange={handlePageChange}
      containerClassName={"flex justify-center mt-4"}
      pageClassName={"px-3 py-2 rounded-full mx-1 cursor-pointer transition-colors duration-600 ease-in-out"}
      previousLinkClassName={"bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 transition-colors duration-600 ease-in-out hover:bg-blue-700"}
      nextLinkClassName={"bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 transition-colors duration-600 ease-in-out hover:bg-blue-700"}
      disabledClassName={"text-gray-500 cursor-not-allowed"}
      activeClassName={"bg-blue-800 text-white px-4 py-2 rounded-lg"}
    />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ViewAllDoctors);
