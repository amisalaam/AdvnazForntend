import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Banner1 from "../../assets/userSide/home/labcarousel.jpg";
import "slick-carousel/slick/slick-theme.css";
import Abdurahman from "../../assets/userSide/home/doctorcarousel1.jpg";



const DoctorCarousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Enable dots for mobile devices
        },
      },
    ],
  };

  const renderDots = (dots) => <ul className="custom-dots">{dots}</ul>;

  return (

      <Slider className="mb-10 mx-10 p-4" {...settings} appendDots={renderDots}>
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Abdurahman} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Abdurahman} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Abdurahman} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Banner1} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Banner1} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Banner1} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Banner1} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Banner1} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Dr:Abdhurahman
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>{" "}
        <div className="relative flex w-96 flex-col bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={Banner1} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Apple AirPods
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              With plenty of talk and listen time
            </p>
          </div>
        </div>
        {/* Add more image slides here */}
      </Slider>

  );
};

export default DoctorCarousel;
