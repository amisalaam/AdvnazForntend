import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosPie } from "react-icons/io";
import { FaUserMd, FaUsers ,FaCalendarCheck} from "react-icons/fa";


const AdminSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <aside
        id="default-sidebar"
        className={`left-0 z-40 w-[268px] h-screen transition-transform rounded ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-advanzBlue">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center p-2 text-white rounded-lg hover:bg-advanzRed"
              >
                <IoIosPie size={25} />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/doctors"
                className="flex items-center p-2 text-white rounded-lg hover:bg-advanzRed"
              >
                <FaUserMd size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Doctors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/users"
                className="flex items-center p-2 text-white rounded-lg hover:bg-advanzRed"
              >
                <FaUsers size={25} />

                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/booked/slots"
                className="flex items-center p-2 text-white rounded-lg hover:bg-advanzRed"
              >
                <FaCalendarCheck size={25} />
                
                <span className="flex-1 ml-3 whitespace-nowrap">Booked Slots</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-advanzRed"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-advanzRed"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
