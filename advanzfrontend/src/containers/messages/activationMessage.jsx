import React from "react";
import ConfirmImg from "../../assets/alert/info.png";

const ActivationMessage = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow">
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center">
        <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-advanzBlue">
            Account Activation
          </h2>
          <p className="text-gray-700 text-center mb-6">
            Thank you for signing up! To activate your account, please check
            your Email inbox:
          </p>

          <p className="text-gray-600 text-center">
            Didn't receive the activation code?{" "}
            <a href="#" className="text-advanzBlue underline">
              Resend it
            </a>
            .
          </p>
        </div>
      </div>

      <div
        className="md:w-1/3 max-w-md hidden md:block object-cover"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-anchor="center-center"
      >
        <img src={ConfirmImg} alt="LoginImage" />
      </div>
    </section>
  );
};

export default ActivationMessage;
