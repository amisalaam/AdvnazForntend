import React, { useState } from "react";
import ResetImg from "../../assets/authentication/resetImg4.png";
import { connect } from "react-redux";

import ConfirmImg from "../../assets/alert/info.png";



import { reset_password } from "../../actions/auth";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ""
  });
  const { email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
  };
  if (requestSent) {
    return (
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow">
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center">
          <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-advanzRed">
            Password Reset Email Sent!
            </h2>
            <p className="text-gray-700 text-center mb-6">
            Great news! We've just sent a password reset email to your Gmail account, ensuring that you'll soon regain access to your valuable account. 🚀
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
  
        <div className="md:w-1/3 max-w-md hidden md:block object-cover">
          <img src={ConfirmImg} alt="LoginImage" />
        </div>
      </section>
    );
  }
  
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow">
      <div className="md:w-1/3 max-w-md hidden md:block object-cover">
        <img src={ResetImg} alt="Sample image" />
      </div>
      <div className="sm:w-1/3 max-w-sm ">
        <div className="text-center md:text-left">
          <label className="mr-1 ">Request Password Reset</label>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />

          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-advanzBlue hover:bg-advanzRed px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              send
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-md text-slate-500 text-center md:text-left">
          Back to{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="login"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default connect(null, {reset_password})(ResetPassword);
