import React, { useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import LoginImag from "../../assets/authentication/signupImg.png";
import ConfirmImg from "../../assets/alert/info.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(name, email, password, re_password);
      setAccountCreated(true);
    } else {
      toast.error("Passwords do not match!");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow">
      <div className="md:w-1/3 max-w-md hidden md:block object-cover">
      <img src={LoginImag} alt="LoginImage" style={{maxWidth: '70%'}} />
    </div>
        <div className="md:w-1/3 max-w-md ">
          
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded "
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
              minLength={8}
            />
            <input
              className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Confirm Password"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              required
              minLength={8}
            />

            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-advanzBlue hover:bg-advanzRed px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-md text-slate-500 text-center md:text-left">
            Already have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to="/login"
            >
              Login
            </Link>
          </div>
          <ToastContainer />
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
