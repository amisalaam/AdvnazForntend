import React, { useState } from "react";
import ConfirmImg from "../../assets/authentication/confirm_password.png";
import { connect } from "react-redux";
import { Navigate,useParams } from "react-router-dom";


import { reset_password_confirm } from "../../actions/auth";

const ResetPasswordConfirm= ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password:''
  });
  const { uid, token } = useParams();
  const { new_password,re_new_password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();


    reset_password_confirm(uid,token,new_password,re_new_password);
    setRequestSent(true);
  };
  if (requestSent) {
    return <Navigate to={'/login'} />;
  }
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow">
     
      <div className="sm:w-1/3 max-w-sm ">
        <div className="text-center md:text-left">
          <label className="mr-1 ">Request Password Reset</label>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
        <input
            className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Enter New Password"
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            required
            minLength={6}
          />
           <input
            className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Confirm New Password"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            required
            minLength={6}
          />

          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-advanzBlue hover:bg-advanzRed px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Reset
            </button>
          </div>
        </form>
       
      </div>
      <div className="md:w-1/3 max-w-md hidden md:block object-cover">
        <img src={ConfirmImg} alt="Sample image" />
      </div>
    </section>
  );
};

export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);
