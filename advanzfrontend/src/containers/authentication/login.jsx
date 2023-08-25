import React, { useState ,useEffect} from "react";
import {  Navigate} from "react-router";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import LoginImag from "../../assets/authentication/loginImg.webp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = ({ login ,isAuthenticated}) => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
 

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  

  const onSubmit = (e) => {
   
    e.preventDefault();
    login(email, password);
  
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    
    <div>
      
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow">
    <div className="md:w-1/3 max-w-md hidden md:block object-cover"data-aos='fade-right' data-aos-delay='500'data-aos-anchor='center-center'>
      <img src={LoginImag} alt="LoginImage" style={{maxWidth: '90%'}} />
    </div>
      <div className="md:w-2/3 max-w-md ">
        <form onSubmit={onSubmit}>
          <input
            className="text-md w-full px-4 py-2 border border-solid border-gray-300 rounded"
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
            minLength={6}
          />
          <div className="mt-4 flex justify-between font-semibold ">
            <Link
              className="text-advanzBlue hover:text-advanzRed hover:underline hover:underline-offset-4"
              to="/reset_password "
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center md:text-left">
            <button 
              className="mt-4 bg-advanzBlue hover:bg-advanzRed px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-md text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
    <ToastContainer/>
    </div>
  );
};
const mapStateToProps = state =>({
  isAuthenticated : state.auth.isAuthenticated,

})

export default connect(mapStateToProps, { login })(Login);
