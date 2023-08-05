import React, { useState } from "react";
import { IoIosPie } from "react-icons/io";
import { BsFillCalendarRangeFill ,BsFillCalendarWeekFill} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const DoctorSidebar = () => {
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
                to="/doctor/dashboard"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/doctor/dashboard"
                    ? "bg-advanzRed"
                    : ""
                }`}
              >
                <IoIosPie size={25} />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
              <Link
                to="/doctor/dashboard/booking"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/doctor/dashboard/booking"
                    ? "bg-advanzRed"
                    : ""
                }`}
              >
                <BsFillCalendarRangeFill size={25} />
                <span className="ml-3">View Booking</span>
              </Link>
            <li>
              <Link
                to="/doctor/dashboard/slots"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/doctor/dashboard/slots"
                    ? "bg-advanzRed"
                    : ""
                }`}
              >
                <BsFillCalendarWeekFill size={25} />
                <span className="ml-3">View Slots</span>
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DoctorSidebar;
