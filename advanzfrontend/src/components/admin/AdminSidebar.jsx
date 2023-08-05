import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosPie } from "react-icons/io";
import { FaUserMd, FaUsers, FaCalendarCheck } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
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
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/admin/dashboard" ? "bg-advanzRed" : ""
                }`}
              >
                <IoIosPie size={25} />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/doctors"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/admin/dashboard/doctors" ? "bg-advanzRed" : ""
                }`}
              >
                <FaUserMd size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Doctors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/users"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/admin/dashboard/users" ? "bg-advanzRed" : ""
                }`}
              >
                <FaUsers size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/slots"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/admin/dashboard/slots" ? "bg-advanzRed" : ""
                }`}
              >
                <FaCalendarCheck size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap"> View Slots </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "#" ? "bg-advanzRed" : ""
                }`}
              >
                <FaCalendarCheck size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Create Slots</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
