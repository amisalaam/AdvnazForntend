import React, { useEffect, useState } from "react";
import AshikAshraf from "../../assets/userSide/home/ashikashrafhome.jpg";
import Abdurahman from "../../assets/userSide/home/abdurahmanhome.webp";
import Carousel from "../../components/carousel/servicecarousel";
import BannerDesktop from "../../assets/userSide/home/home.webp";
import LoadingComponent from "../../components/Loading";
import {  AiFillExperiment } from "react-icons/ai";
import { FaTruckMedical ,FaHospitalUser,FaXRay,FaVirus} from "react-icons/fa6";

import DoctorCarousel from "../../components/carousel/doctorcarousel";
const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div
        className="bg-cover bg-center min-h-[38rem] flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerDesktop})` }}
      >
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

      <div className="w-full p-4 text-center bg-advanzBlue  shadow md:p-8 ">
        <div className="items-center justify-center space-y-4 md:flex md:space-y-0 md:space-x-4 M-5  my-20 ">
          <a
            href="#"
            className="w-full md:w-auto bg-white  hover:bg-advanzRed hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
          >
            <FaHospitalUser size={28} />
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
            <AiFillExperiment size={28} />
            <div className="text-left">
              <div className="-mt-1 font-sans text-md font-semibold  px-2 ">
                Laboratory
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full md:w-auto bg-white  hover:bg-advanzRed hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
          >
            <FaXRay size={28}/>
            <div className="text-left">
              <div className="-mt-1 font-sans text-md font-semibold px-2">
                Radiology
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full md:w-auto bg-white  hover:bg-advanzRed hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
          >
            <FaTruckMedical size={28} />
            <div className="text-left">
              <div className="-mt-1 font-sans text-md font-semibold px-2">
                Emergency
              </div>
            </div>
          </a>
        </div>

        <div className="md:border-t-2 md:border-white md:p-5 md:mt-8 my-7  "></div>
        <h5 className="mb-2 lg:text-3xl text-xl font-bold text-white lg:py-4">
          WELCOME TO ADVANZ MEDICAL CENTRE
        </h5>

        <p
          className="lg:mb-20 text-base text-gray-300 md:text-lg  lg:w-3/4 mx-auto my-10 "
          style={{ lineHeight: "2" }}
        >
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
      <div className="md:grid md:grid-cols-2">
        <div className="md:pl-4 lg:pl-20 flex flex-col justify-center">
          <h1 className="my-4 mx-4 lg:text-3xl text-2xl font-bold text-advanzRed ">
            Complete Medical Solutions <br />
            in One Place
          </h1>
          <div>
            <p className="my-4 mx-4  leading-loose">
              As the founder of this hospital, my vision was to create a place
              where excellence meets compassion, where healing becomes an art.
              This hospital stands as a testament to my unwavering commitment to
              provide exceptional medical care, innovative treatments, and a
              nurturing environment. Every patient who walks through our doors
              is not just a case, but a person deserving of respect, dignity,
              and personalized attention.
            </p>
            <p className="text-right m-3">Dr: Abhrahiman N</p>
          </div>
        </div>
        <div className="md:p-8 lg:pr-20 p-8">
          <img
            className="w-full h-auto object-cover max-w-full md:py-10 md:pr-10 "
            src={Abdurahman}
            alt=""
          />
        </div>
      </div>
      {/* OUR SERVICE AND DEPARMENTS */}
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-1/3 max-w-md hidden lg:block object-cover flex-grow px-16  ">
          <div className="w-full max-w-sm p-3 bg-advanzBlue border border-gray-200 rounded-2xl shadow sm:p-8 text-center m-10 mb-20 overflow-y-auto max-h-[25rem] scrollbar-thin scrollbar-thumb-white scrollbar-track-white">
            <h5 className="mb-4 text-2xl font-medium text-white ">
              DEPARTMENTS
            </h5>

            <ul role="list" className="space-y-5 my-4">
              <li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>

                <span className="text-base font-normal leading-tight text-white">
                  Ortho
                </span>
              </li>
              <li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>

                <span className="text-base font-normal leading-tight text-white">
                  pediatric
                </span>
              </li>
              <li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>
                
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3 ">
              <FaVirus className="text-advanzRed"/>
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>
              
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>
                
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>
                
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>
                
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li><li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>
                
                <span className="text-base font-normal leading-tight text-white">
                  Integration help
                </span>
              </li><li className="flex space-x-3">
              <FaVirus className="text-advanzRed"/>
                
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
            <p className="my-4 mx-4 leading-loose">
              As the founder of this hospital, my vision was to create a place
              where excellence meets compassion, where healing becomes an art.
              This hospital stands as a testament to my unwavering commitment to
              provide exceptional medical care, innovative treatments, and a
              nurturing environment. Every patient who walks through our doors
              is not just a case, but a person deserving of respect, dignity,
              and personalized attention.
            </p>
          </div>
          <p className="text-right ">Dr: Ashik Ashraf</p>
        </div>
        <div className="md:p-8 lg:pr-20 ">
          <img
            className="w-full h-auto object-cover max-w-full sm:py-10 md:pr-10"
            src={AshikAshraf}
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="y-4 lg:mx-20 lg:text-3xl my-5 text-2xl text-left p-5 font-bold text-advanzRed ">
          Our Doctors
        </h1>
        <DoctorCarousel />
      </div>
    </>
  );
};

export default Home;
