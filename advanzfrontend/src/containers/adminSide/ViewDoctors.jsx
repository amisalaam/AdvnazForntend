import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import axios from 'axios';
import { connect } from "react-redux";

const API_URL = import.meta.env.VITE_API_URL;

const ViewDoctors = ({ user }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && user.user) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/myadmin/api/get/all/doctors/`);
          setDoctors(response.data);
        } catch (err) {
          setError(err.message || 'An error occurred while fetching data.');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [user]);

  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];

  const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="bg-white shadow rounded-md w-full">
        <div className="p-8 border-b border-blue-gray-100">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <h5 className="text-blue-gray text-xl font-semibold">Members list</h5>
              <p className="text-gray mt-1 font-normal">See information about all members</p>
            </div>
            <div className="flex gap-2">
              <button className="border border-blue-gray-300 text-blue-gray rounded-lg py-2 px-4 text-sm hover:bg-blue-gray-50">
                View All
              </button>
              <button className="border border-blue text-blue rounded-lg py-2 px-4 text-sm flex gap-2 items-center hover:bg-blue-500 hover:text-white">
                Add member
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <div className="w-full md:w-max">
              <ul className="flex border border-blue-gray-300 rounded-md overflow-hidden">
                {TABS.map(({ label, value }) => (
                  <li
                    key={value}
                    className="flex-1 text-center py-2 px-4 bg-blue-gray-50 text-blue-gray font-semibold cursor-pointer hover:bg-blue-gray-100"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-72">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full py-2 pr-10 pl-4 text-blue-gray border border-blue-gray-300 rounded-md focus:outline-none focus:border-blue focus:ring focus:ring-blue-200"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-gray absolute right-3 top-1/2 transform -translate-y-1/2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.5 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM18 9.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M14.853 13.147a1 1 0 011.415 0l3 3a1 1 0 11-1.415 1.415l-3-3a1 1 0 010-1.415z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50/50 py-4 px-4 text-blue-gray font-semibold"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doctors.map(({ img, name, email, job, org, online, date }, index) => {
                  const isLast = index === doctors.length - 1;
                  const classes = isLast ? "py-4 px-4" : "py-4 px-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name} className={classes}>
                      <td>
                        <div className="flex items-center gap-3">
                          <img
                            src={img}
                            alt={name}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <div className="flex flex-col">
                            <p className="text-blue-gray font-semibold">{name}</p>
                            <p className="text-blue-gray text-sm font-normal opacity-70">
                              {email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col">
                          <p className="text-blue-gray font-semibold">{job}</p>
                          <p className="text-blue-gray text-sm font-normal opacity-70">{org}</p>
                        </div>
                      </td>
                      <td>
                        <div className="w-max">
                          <span
                            className={`inline-block py-1 px-2 rounded-lg ${
                              online ? "bg-green-100 text-green-800" : "bg-blue-gray-100 text-blue-gray-800"
                            }`}
                          >
                            {online ? "online" : "offline"}
                          </span>
                        </div>
                      </td>
                      <td>
                        <p className="text-blue-gray text-sm font-normal">{date}</p>
                      </td>
                      <td>
                        <button className="p-2 text-blue-gray hover:bg-blue-gray-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="border-t border-blue-gray-100 p-4 flex items-center justify-between">
          <p className="text-blue-gray font-normal">Page 1 of 10</p>
          <div className="flex gap-2">
            <button className="border border-blue-gray-300 text-blue-gray rounded-lg py-2 px-4 text-sm hover:bg-blue-gray-50">
              Previous
            </button>
            <button className="border border-blue-gray-300 text-blue-gray rounded-lg py-2 px-4 text-sm hover:bg-blue-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ViewDoctors);
