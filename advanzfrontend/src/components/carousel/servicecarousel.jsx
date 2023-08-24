import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Carousel = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/doctor/api/get/services/`)
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const settings = {
    lazyLoad: "ondemand", // Load images as they come into view
    arrows: false,
    dots: true,
    infinite: services.length > 2,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: Math.min(services.length, 1),
          slidesToScroll: Math.min(services.length, 1),
          dots: true,
        },
      },
    ],
  };

  const renderDots = dots => <ul className="custom-dots">{dots}</ul>;

  return (
    <Slider className="mb-10 mx-10" {...settings} appendDots={renderDots}>
      {services.map(service => (
        <div key={service.id} className="max-w-sm bg-white rounded-xl p-4 mr-5">
          <div className="flex items-center justify-center" style={{ height: "212px" }}>
            <img
              className="w-full h-full object-cover rounded-xl"
              src={`${API_URL}${service.image}`}
              alt=""
            />
          </div>
          <div className="my-2">
            <h5 className="my-3 text-2xl font-bold tracking-tight text-advanzBlue">{service.heading}</h5>
            <p className="mb-3 mr-2 ">{service.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
