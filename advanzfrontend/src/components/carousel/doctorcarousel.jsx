import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Banner1 from "../../assets/userSide/home/labcarousel.jpg";
import "slick-carousel/slick/slick-theme.css";
import Abdurahman from "../../assets/userSide/home/doctorcarousel1.jpg";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const DoctorCarousel = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/doctor/api/details/`)
      .then(response => {
        setDoctors(response.data);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const settings = {
    arrows: false,
    lazyLoad:true,

    dots: true,
    infinite: doctors.length > 3,
    speed: 500,
    slidesToShow: 4, // Update slidesToShow value
    slidesToScroll: 1,// Update slidesToScroll value
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2, // Update slidesToShow value
          slidesToScroll: 2, // Update slidesToScroll value
          infinite: doctors.length > 2,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: Math.min(doctors.length, 1), // Update slidesToShow value
          slidesToScroll: Math.min(doctors.length, 1), // Update slidesToScroll value
          dots: true,
        },
      },
    ],
  };

  const renderDots = dots => <ul className="custom-dots">{dots}</ul>;

  return (
    <Slider className="mb-10 mx-10 p-4" {...settings} appendDots={renderDots}>
      {doctors.map(doctor => (
      <div key={doctor.user} className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={`${API_URL}${doctor.doctor_profile_image}`}className="h-full w-full object-cover" alt="Doctor" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {doctor.name}
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {doctor.department_name}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DoctorCarousel;
