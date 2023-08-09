import React, { useState } from 'react';
import { BsFillCalendarRangeFill ,BsFillCalendarWeekFill} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { IoIosPie } from "react-icons/io";


const UserSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
    

      <aside
        id="default-sidebar"
        className={`left-0 z-40 w-[268px] h-screen transition-transform rounded ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-advanzBlue">
          <ul className="space-y-2 font-medium">
            <Link
                to="/user/dashboard"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/user/dashboard"
                    ? "bg-advanzRed"
                    : ""
                }`}
              >
                <IoIosPie size={25} />
                <span className="ml-3">Dashboard</span>
              </Link>
              <li>
              <Link
                to="/user/dashboard/booking"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-advanzRed ${
                  location.pathname === "/user/dashboard/booking" ? "bg-advanzRed" : ""
                }`}
              >
                <BsFillCalendarRangeFill size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap"> View Booking </span>
              </Link>
            </li>
            
        
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default UserSidebar;
