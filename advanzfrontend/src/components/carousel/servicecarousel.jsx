import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Banner1 from '../../assets/userSide/home/labcarousel.jpg';
import "slick-carousel/slick/slick-theme.css";
import Abdurahman from "../../assets/userSide/home/abdurahmanhome.webp";



const Carousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    
    <Slider className="mb-10 mx-10" {...settings} appendDots={renderDots}>
      <div className="max-w-sm bg-white  rounded-xl p-4 mr-5">
        <a href="#">
          
          <div className="flex items-center justify-center" style={{ height: "212px" }}>
            <img className="w-full h-full object-cover rounded-xl" src={Banner1} alt="" />
          </div>
        </a>
        <div className="my-2">
          <a href="#">
            <h5 className="my-3 text-2xl font-bold tracking-tight text-advanzBlue">
              Laboratry Analysis
            </h5>
          </a>
          <p className="mb-3 mr-3 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
        </div>
      </div>

      {/* Repeat the above code for other slide cards */}
      <div className="max-w-sm bg-white  rounded-xl p-4 mr-5 ">
        <a href="#">
          <div className="flex items-center justify-center" style={{ height: "212px" }}>
            <img className="w-full h-full object-cover rounded-xl " src={Banner1} alt="" />
          </div>
        </a>
        <div className="my-2">
          <a href="#">
            <h5 className="my-3 text-2xl font-bold tracking-tight text-advanzBlue ">
              Laboratry Analysis
            </h5>
          </a>
          <p className="mb-3 mr-3 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
        </div>
      </div>

      {/* Repeat the above code for other slide cards */}
      <div className="max-w-sm bg-white  rounded-xl p-4 mr-5">
        <a href="#">
          <div className="flex items-center justify-center" style={{ height: "212px" }}>
            <img className="w-full h-full object-cover rounded-xl" src={Abdurahman} alt="" />
          </div>
        </a>
        <div className="my-2">
          <a href="#">
            <h5 className="my-3 text-2xl font-bold tracking-tight text-advanzBlue">
              Laboratry Analysis
            </h5>
          </a>
          <p className="mb-3 mr-3 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
        </div>
      </div>

      {/* Repeat the above code for other slide cards */}
      <div className="max-w-sm bg-white  rounded-xl p-4 mr-5">
        <a href="#">
          <div className="flex items-center justify-center" style={{ height: "212px" }}>
            <img className="w-full h-full object-cover rounded-xl" src={Banner1} alt="" />
          </div>
        </a>
        <div className="my-2">
          <a href="#">
            <h5 className="my-3 text-2xl font-bold tracking-tight text-advanzBlue">
              Laboratry Analysis
            </h5>
          </a>
          <p className="mb-3 mr-3 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
        </div>
      </div>

      <div>
        <img src={Abdurahman} alt="Image 3" />
      </div>
      <div>
        <img src={Abdurahman} alt="Image 4" />
      </div>
      <div>
        <img src={Abdurahman} alt="Image 4" />
      </div> 
      
    </Slider>
    
  );
};

export default Carousel;
