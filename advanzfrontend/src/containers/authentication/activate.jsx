import React, { useState } from "react";
import { Navigate, useParams } from "react-router";
import { connect } from "react-redux";
import { verify } from "../../actions/auth";
import ConfirmImg from "../../assets/authentication/confirm_password.png";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();
  const verify_account = (e) => {
    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow">
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center">
        <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-advanzRed">
            Account Activation
          </h2>
          <p className="text-gray-700 text-center mb-6">
            Thank you for signing up! To activate your account, please click the
            activation button below:
          </p>

          <div className="flex items-center justify-center mb-6">
            <button
              onClick={verify_account}
              className="py-2 px-4 bg-advanzBlue text-white rounded-r-md hover:bg-advanzRed transition duration-300 focus:outline-none focus:ring-2 focus:ring-advanzBlue"
            >
              Activate Account
            </button>
          </div>

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
};

export default connect(null, { verify })(Activate);
