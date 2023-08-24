import React, { useEffect, useState } from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsJustify } from "react-icons/bs";
import { connect } from "react-redux";
import AdvanzLogo from "../assets/authentication/advanzLogo.webp";
import { IoIosPie } from "react-icons/io";

const Navbar = ({  isAuthenticated, user }) => {
  const navigate = useNavigate();
  const location = useLocation()
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (user && user.is_superuser) {
      navigate("/admin/dashboard");
    } else if (user && user.is_doctor) {
      navigate("/doctor/dashboard");
    }
  }, [isAuthenticated, user]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const guestLinks = () => (
    <ul className="text-xl font-bold flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-advanzBlue">
      <li>
      <Link
          to="/"
          onClick={toggleDropdown}
          className={`block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-white md:p-0 md:hover:text-advanzRed ${
            location.pathname === "/" ? "text-white  bg-advanzRed md:text-advanzRed" : ""
          }`} 
          aria-current="page"
        >
          Home
        </Link>
        
      </li>
      <li>
      <Link
          to="/doctors"
          onClick={toggleDropdown}
          className={`block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-white md:p-0 md:hover:text-advanzRed ${
            location.pathname === "/doctors" ? "text-white  bg-advanzRed md:text-advanzRed" : ""
          }`} 
          aria-current="page"
        >
          Doctors
        </Link>
      </li>
     
      
      <li>
      <Link
          to="/login"
          onClick={toggleDropdown}
          className={`block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-white md:p-0 md:hover:text-advanzRed ${
            location.pathname === "/login" ? "text-white bg-advanzRed md:text-advanzRed" : ""
          }`} 
          aria-current="page"
        >
          Login
        </Link>
      </li>
    </ul>
  );

  const authLinks = () => (
    <ul className="text-xl font-bold flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-advanzBlue">
      <li>
      <Link
          to="/"
          onClick={toggleDropdown}
          className={`block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-white md:p-0 md:hover:text-advanzRed ${
            location.pathname === "/" ? "text-white bg-advanzRed md:text-advanzRed" : ""
          }`} 
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li>
      <Link
          to="/doctors"
          onClick={toggleDropdown}
          className={`block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-white md:p-0 md:hover:text-advanzRed ${
            location.pathname === "/doctors" ? "text-white  bg-advanzRed md:text-advanzRed" : ""
          }`} 
          aria-current="page"
        >
          Doctors
        </Link>
      </li>
     
     
      <li>
        {user && user.is_doctor ? (
          <Link
          to="/doctor/dashboard"
          onClick={toggleDropdown}
          className={`p-1 md:text-white rounded md:bg-advanzRed md:hover:bg-red-900 flex items-center ${
            location.pathname === "/doctor/dashboard" ? "text-white bg-advanzRed md:bg-none  " : ""
          }`} 
          aria-current="page"
        >
          <IoIosPie size={25} />
          Dashboard
        </Link>
        ) : user && user.is_superuser ? (
          <Link
          to="/admin/dashboard"
          onClick={toggleDropdown}
          className={`p-1 md:text-white rounded md:bg-advanzRed md:hover:bg-red-900 flex items-center ${
            location.pathname === "/admin/dashboard" ? "text-white bg-advanzRed md:bg-none  " : ""
          }`} 
          aria-current="page"
        >
          <IoIosPie size={25} />
          Dashboard
        </Link>
        ) : (
           <Link
          to="/user/dashboard"
          onClick={toggleDropdown}
          className={`p-1 md:text-white rounded md:bg-advanzRed md:hover:bg-red-900 flex items-center ${
            location.pathname === "/user/dashboard" ? "text-white bg-advanzRed md:bg-none  " : ""
          }`} 
          aria-current="page" 
        >
          <IoIosPie size={25} />
          Dashboard
        </Link>
        )}
      </li>
    </ul>
  );



  return (
    <nav className="bg-white border-gray-200 z-10 relative ">
      <div className="bg-advanzBlue md:pe-20">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="bg-white relative p-2 before:contents[''] before:absolute before:w-0 before:h-0 before:top-0 before:-right-[55px] xl:before:-right-[72px] before:border-[29px] xl:before:border-[37px] before:border-transparent before:border-t-white before:border-l-white">
            <img src={AdvanzLogo} className="h-10 xl:h-14" alt="AdvanzLogo" />
          </div>
          <ToastContainer />

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none  "
            aria-controls="navbar-default"
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <BsJustify size={25} />
          </button>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } w-full md:block md:w-auto absolute top-[50px] md:top-0 md:relative`}
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
  user: state.auth.user,
});

export default connect(mapStateToProps)(Navbar);
