import React, { Fragment, useEffect, useState, } from "react";
import { Link,Navigate,useNavigate } from "react-router-dom";
import { logout  } from "../actions/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { connect } from "react-redux";
import AdvanzLogo from "../assets/authentication/advanzLogo.png";

const Navbar = ({ logout, isAuthenticated,user }) => {
  const navigate = useNavigate();

  
  useEffect(() => {
  
      if (user && user.is_superuser) {
        navigate('/admin/dashboard')
      }
        
      else if(user && user.is_doctor){
        navigate('/doctor/dashboard')
      }
      
    


  }, [isAuthenticated, user]);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const guestLinks = () => (
    
    <ul className="text-xl font-bold flex flex-col p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-advanzBlue   ">
        <li>
          <a
            href="#"
            className="block py-2 pl-3  pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:hover:text-advanzRed"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
          >
            Contact
          </a>
        </li>
      </ul>
   
  );

  const authLinks = () => (
    <ul className="text-xl font-bold flex flex-col p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-advanzBlue   ">
    <li>
      <a
        href="#"
        className="block py-2 pl-3  pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:hover:text-advanzRed"
        aria-current="page"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
      >
        Pricing
      </a>
    </li>
    <li>
      <button
        onClick={logout}
        className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-advanzRed md:p-0 "
        >
       Logout
      </button>
    </li>
  </ul>
  );
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <nav
    className="bg-white border-gray-200 "
    data-aos="fade-down"
      data-aos-delay="1200"
    ><div className="bg-advanzRed  md:pe-20"></div>
      <div className="bg-advanzBlue  md:pe-20">
        <div className=" flex flex-wrap items-center justify-between mx-auto  ">
          <div className="bg-white relative p-2 before:contents[''] before:absolute before:w-0 before:h-0 before:top-0 before:-right-[65px] before:border-[36px] before:border-advanzBlue before:border-t-white before:border-l-white">
            <img src={AdvanzLogo} className="h-7 xl:h-14" alt="AdvanzLogo" />
          </div>
    <ToastContainer/>


          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isDropdownOpen ? "text-blue-700" : ""}`}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } w-full md:block md:w-auto relative`}
            id="navbar-default"
          >
            {isAuthenticated ? authLinks() : guestLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user:state.auth.user
});

export default connect(mapStateToProps, { logout })(Navbar);
