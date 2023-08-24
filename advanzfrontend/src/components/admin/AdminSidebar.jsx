import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosPie } from "react-icons/io";
import { FaUserMd, FaUsers, FaCalendarCheck } from "react-icons/fa";
import { BsFillCalendarRangeFill,BsFillBuildingsFill } from "react-icons/bs";

const AdminSidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`absolute lg:relative transition-all bg-advanzBlue ${
      isSidebarOpen ? "left-0" : "-left-[268px] lg:left-0"
    } sm:translate-x-0`}>
      
      <aside
        id="default-sidebar"
        className={`left-0 relative bg-advanzBlue z-40 w-[268px] h-screen transition-transform rounded `}
        aria-label="Sidebar"
      >
        <div className="absolute lg:hidden -right-10 shadow bg-white p-3 rounded-sm">
    <button onClick={()=> setSidebarOpen(prev => !prev)}>X</button>
      </div>
        <div className="h-full px-3 py-4 overflow-y-auto ">
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
                to="/admin/dashboard/department"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/admin/dashboard/department" ? "bg-advanzRed" : ""
                }`}
              >
                <BsFillBuildingsFill size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Departments</span>
              </Link>
            </li>
            
            <li>
              <Link
                to="/admin/dashboard/slots"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/admin/dashboard/slots" ? "bg-advanzRed" : ""
                }`}
              >
                <BsFillCalendarRangeFill size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap"> View Slots </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/booking"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/admin/dashboard/booking" ? "bg-advanzRed" : ""
                }`}
              >
                <FaCalendarCheck size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap"> View Booking </span>
              </Link>
            </li>
           
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
