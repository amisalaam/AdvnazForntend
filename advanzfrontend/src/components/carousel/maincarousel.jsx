import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner1 from '../../assets/userSide/home/home1.jpg';


function Maincarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" overflow-hidden">
     
      <Slider {...settings} className="" >
        <div className=" flex justify-center items-center" >
          <img src={Banner1} alt="Slide 1" className=" max-w-full" />
        </div>
        <div className=" flex justify-center items-center">
          <img src={Banner1} alt="Slide 2" className=" max-w-full" />
        </div>
        <div className=" flex justify-center items-center">
          <img src={Banner1} alt="Slide 3" className=" max-w-full" />
        </div>
      </Slider>
     

    </div>
  );
}
export default Maincarousel;
