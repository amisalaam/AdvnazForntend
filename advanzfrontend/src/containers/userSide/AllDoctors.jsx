import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react"; // Import Transition from @headlessui/react
import BG from "../../assets/userSide/Booking/bookingImg2.jpg";

const AllDoctors = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All Doctors");
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isMobile, setIsMobile] = useState(false); // Track mobile screen

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/doctor/api/details/`);
        const doctors = response.data;
        const allDepartments = [
          "All Doctors",
          ...new Set(doctors.map((doctor) => doctor.department_name)),
        ];
        setDepartments(allDepartments);
        setDoctors(doctors);
        setFilteredDoctors(doctors);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    const debouncedHandleResize = debounce(handleResize, 200); // Debounce the resize event
    handleResize(); // Set initial value
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    if (department !== "All Doctors") {
      const updatedDoctors = doctors.filter(
        (doctor) => doctor.department_name === department
      );
      setFilteredDoctors(updatedDoctors);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  const handleCardButtonClick = () => {
    // Handle button click here
    // You can add your desired logic or action
  };

  return (
    <div>
    <div className="flex min-h-screen">
  <div
    className="w-1/2 bg-cover bg-center py-20 my-20"
    style={{
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
  <div className="w-1/2 flex items-center justify-center ">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold text-advanzRed mb-4 sm:text-6xl md:text-5xl lg:text-5xl">
        Our aim is to take of<br />
        <span className="text-advanzRed">Your health</span> {/* Wrap the word "Website" with a span */}
      </h1>
      <p className="text-lg text-gray-700 mb-8 sm:text-xl md:text-2xl lg:text-2xl">
        We provide{" "}
        <span className="text-advanzRed">amazing services</span> to enhance
        your online presence.
      </p>
      <a
        href="#"
        className="px-6 py-3 text-white bg-advanzBlue rounded-full uppercase text-sm font-semibold hover:bg-advanzRedtransition-colors duration-300 ease-in-out"
      >
        See Doctors
      </a>
    </div>
  </div>
  
</div>


      <div className="container mx-auto lg:px-20 py-10">
        <div className="mb-4">
          {isMobile ? (
            <select
              value={selectedDepartment}
              onChange={(e) => handleDepartmentClick(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-lg text-white bg-advanzBlue"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          ) : (
            <div className="flex flex-wrap">
              {departments.map((department) => (
                <button
                  key={department}
                  className={`mr-2 mb-4 px-4 py-2 rounded text-white ${
                    selectedDepartment === department
                      ? "bg-advanzRed"
                      : "bg-advanzBlue"
                  }`}
                  onClick={() => handleDepartmentClick(department)}
                >
                  {department}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredDoctors.map((doctor) => (
    <div
      key={doctor.user}
      className="relative flex flex-col bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={`${API_URL}${doctor.doctor_profile_image}`}
          className="h-full w-full object-cover"
          alt="Doctor"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            DR:{doctor.name}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {doctor.department_name}
        </p>
        
      </div>
      
      <div>
      <Link
          className="absolute bottom-4 right-4 px-4 py-2 rounded-md text-white bg-advanzBlue hover:bg-advanzRed"
          
          style={{ width: 'fit-content' }}
          to={`/appointment/booking/${doctor.user}`}
        >
          View Details
        </Link>
      </div>
    </div>
    
  ))}
  
</div>

      </div>
    </div>
  );
};

export default AllDoctors;

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
