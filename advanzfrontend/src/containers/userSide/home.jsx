import React, { useEffect, useState } from "react";
import AshikAshraf from "../../assets/userSide/home/ashikashrafhome.jpg";
import Abdurahman from "../../assets/userSide/home/abdurahmanhome.webp";
import Carousel from "../../components/carousel/servicecarousel";

import Banner1 from '../../assets/userSide/home/home1.jpg';
import LoadingComponent from "../../components/Loading";

import DoctorCarousel from "../../components/carousel/doctorcarousel";


  const Home = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      window.onload = () => {
        setLoading(false);
      };
    }, []);
  
    if (loading) {
      return <LoadingComponent />;
    }
  
  return (
   <>
      <div className="bg-cover bg-center min-h-[38rem] flex items-center justify-center" style={{ backgroundImage: `url(${Banner1})` }}>
  <div className="container mx-auto text-center max-w-[25 rem]">
    <h1 className="text-4xl font-bold text-advanzRed mb-4 sm:text-6xl md:text-3xl lg:text-8xl">
      Welcome to Our Website
    </h1>
    <p className="text-lg text-advanzRed sm:text-xl md:text-2xl lg:text-2xl">
      We provide amazing services to enhance your online presence.
    </p>
  </div>
</div>

      {/* welcomediv */}

      <div className="w-full p-4 text-center bg-advanzBlue  shadow md:p-8 "  >
        <div className="items-center justify-center space-y-4 md:flex md:space-y-0 md:space-x-4 M-5  my-20 ">
          <a
            href="#"
            className="w-full md:w-auto bg-white  hover:bg-advanzRed hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
          >
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M48 0C21.5 0 0 21.5 0 48V256H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v64H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v80c0 26.5 21.5 48 48 48H265.9c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2V271.8 48c0-26.5-21.5-48-48-48H48zM152 64h16c8.8 0 16 7.2 16 16v24h24c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H184v24c0 8.8-7.2 16-16 16H152c-8.8 0-16-7.2-16-16V152H112c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16h24V80c0-8.8 7.2-16 16-16zM512 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM288 477.1c0 19.3 15.6 34.9 34.9 34.9H541.1c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1H381.1c-51.4 0-93.1 41.7-93.1 93.1z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="-mt-1 font-sans text-md font-semibold px-2">
                Booking
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full md:w-auto bg-white  hover:bg-advanzRed hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5   "
          >
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="-mt-1 font-sans text-md font-semibold   ">
                Laboratory
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full md:w-auto bg-white  hover:bg-advanzRed hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
          >
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M0 64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V96C14.3 96 0 81.7 0 64zM256 96c-8.8 0-16 7.2-16 16v32H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48H128c-8.8 0-16 7.2-16 16s7.2 16 16 16H240v70.6L189.1 307c-5.2-2-10.6-3-16.2-3h-2.1c-23.6 0-42.8 19.2-42.8 42.8c0 9.6 3.2 18.9 9.1 26.4l18.2 23.2c9.7 12.4 24.6 19.6 40.3 19.6H316.4c15.7 0 30.6-7.2 40.3-19.6l18.2-23.2c5.9-7.5 9.1-16.8 9.1-26.4c0-23.6-19.2-42.8-42.8-42.8H339c-5.5 0-11 1-16.2 3L272 326.6V256H384c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V176h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16zM208 352a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="-mt-1 font-sans text-md font-semibold">
                Radiology
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full md:w-auto bg-white  hover:bg-advanzRed hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
          >
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M192 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V512H368V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H192V48zM48 96H160V512H48c-26.5 0-48-21.5-48-48V320H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V224H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V144c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V464c0 26.5-21.5 48-48 48H480V96H592zM312 64c-8.8 0-16 7.2-16 16v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V152h24c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344V80c0-8.8-7.2-16-16-16H312z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="-mt-1 font-sans text-md font-semibold">
                Emergency
              </div>
            </div>
          </a>
        </div>

        <div className="md:border-t-2 md:border-white md:p-5 md:mt-8 my-7  " ></div>
        <h5 className="mb-2 lg:text-3xl text-xl font-bold text-white lg:py-4"  >
          WELCOME TO ADVANZ MEDICAL CENTRE
        </h5>

        <p className="lg:mb-20 text-base text-gray-300 md:text-lg  lg:w-3/4 mx-auto my-10 " style={{ lineHeight: "2" }} >
          We embrace the power of healing and the art of compassionate care.
          With dedicated professionals and a patient-centered approach, we
          strive to restore wellness and bring harmony to every individual we
          serve. Step into a realm of compassionate healing, where our team
          combines expertise, empathy, and state-of-the-art medical practices to
          provide you with the care you deserve. Trust us to be your partners on
          the journey towards a healthier, happier life.
        </p>
      </div>

      {/* DOCTOR ABDHURAHMAN */}
      <div className="md:grid md:grid-cols-2" >
        <div className="md:pl-4 lg:pl-20 flex flex-col justify-center">
          <h1 className="my-4 mx-4 lg:text-3xl text-2xl font-bold text-advanzRed ">
            Complete Medical Solutions <br />
            in One Place
          </h1>
          <div >
          <p className="my-4 mx-4  leading-loose"  >
            As the founder of this hospital, my vision was to create a place
            where excellence meets compassion, where healing becomes an art.
            This hospital stands as a testament to my unwavering commitment to
            provide exceptional medical care, innovative treatments, and a
            nurturing environment. Every patient who walks through our doors is
            not just a case, but a person deserving of respect, dignity, and
            personalized attention.
          </p>
          <p className="text-right m-3" >Dr: Abhrahiman N</p>
          </div>
        </div>
        <div className="md:p-8 lg:pr-20 p-8" >
          <img
            className="w-full h-auto object-cover max-w-full md:py-10 md:pr-10 "
            src={Abdurahman}
            alt=""
          />
        </div>
      </div>
      {/* OUR SERVICE AND DEPARMENTS */}
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-1/3 max-w-md hidden lg:block object-cover flex-grow px-16">
          <div className="w-full max-w-sm p-3 bg-advanzBlue border border-gray-200 rounded-2xl shadow sm:p-8 text-center m-10 mb-20">
            <h5 className="mb-4 text-2xl font-medium text-white ">
              DEPARTMENTS
            </h5>

            <ul role="list" className="space-y-5 my-4">
              <li className="flex space-x-3" >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-advanzRed "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-white">
                  Ortho
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-advanzRed "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-white">
                  pediatric
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-advanzRed "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-advanzRed "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-advanzRed "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-advanzRed "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-advanzRed "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 overflow-hidden ">
          <h1 className=" mx-4 lg:text-3xl text-2xl font-bold text-advanzRed ">
            Our services
          </h1>
          <Carousel />
        </div>
      </div>
      {/* ASHIK ASHRAF HOME */}
      <div className="md:grid md:grid-cols-2">
        <div className="md:pl-4 lg:pl-20 flex flex-col justify-center">
          <h1 className=" mx-4 lg:text-3xl text-2xl font-bold text-advanzRed ">
            Complete Medical Solutions <br />
            in One Place
          </h1>
          <div>
          <p className="my-4 mx-4  lg:leading-loose">
            As the founder of this hospital, my vision was to create a place
            where excellence meets compassion, where healing becomes an art.
            This hospital stands as a testament to my unwavering commitment to
            provide exceptional medical care, innovative treatments, and a
            nurturing environment. Every patient who walks through our doors is
            not just a case, but a person deserving of respect, dignity, and
            personalized attention.
          </p>
          </div>
          <p className="text-right ">Dr: Ashik Ashraf</p>
        </div>
        <div className="md:p-8 lg:pr-20 ">
          <img
            className="w-full h-auto object-cover max-w-full md:py-10 md:pr-10"
            src={AshikAshraf}
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="y-4 mx-20 lg:text-3xl text-2xl font-bold text-advanzRed ">
          Our Doctors
        </h1>
        <DoctorCarousel />
      </div>
      </>
   
  );
};

export default Home;
