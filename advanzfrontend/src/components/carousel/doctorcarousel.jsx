import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
import ImageLoadingComponent from "../ImageLoading";

const API_URL = import.meta.env.VITE_API_URL;

const DoctorCarousel = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/doctor/api/details/`)
      .then(response => {
        setDoctors(response.data);
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const settings = {
    arrows: false,
    lazyLoad: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  if (loading) {
    return <div><ImageLoadingComponent/></div>;
  }
  return (
    <Slider className="mb-10 mx-5 lg:mx-10 p-4" {...settings}>
      {doctors.map(doctor => (
        <div key={doctor.user} className="   ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={`${API_URL}${doctor.doctor_profile_image}`} className="h-full w-full object-cover" alt="Doctor" />
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
