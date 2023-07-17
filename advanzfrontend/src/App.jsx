import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Layout from "./hocs/Layout";
import Home from "./containers/userSide/home";
import Login from "./containers/authentication/Login";
import Signup from "./containers/authentication/Signup";
import Activate from "./containers/authentication/Activate";
import ResetPassword from "./containers/authentication/ResetPassword";
import ResetPasswordConfirm from "./containers/authentication/ResetPasswordConfirm";
import DoctorDashboard from "./containers/doctorSide/doctorDashboard";
import AdminDashboard from "./containers/adminSide/adminDashboard";
import DoctorAppointment from "./containers/userSide/DoctorAppointment";
import AllDoctors from "./containers/userSide/AllDoctors";
import LoadingComponent from "./components/Loading";
import UserDashboard from "./containers/userSide/Dashboard/UserDashboard";
// import DoctorAppointment from "./containers/userSide/DoctorAppointment";

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* AUTHENTICATION PATHS */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            {/* USER SIDE PATHS  */}
            <Route path="/" element={<LoadingComponent />} />
            <Route path="/user/dashboard/" element={<UserDashboard />} />
            <Route path="/appointment" element={<AllDoctors/>} />
            <Route path="/appointment/booking/:id/" element={<DoctorAppointment/>} />


            {/* DOCTOR SIDE PATHS  */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard/>} />
            {/* ADMIN SIDE PATHS */}
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />

          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
