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
import ViewDoctors from "./containers/adminSide/ViewDoctors";
import ViewUsers from "./containers/adminSide/viewUsers";
import CreateSlots from "./containers/adminSide/CreateSlots";
import ViewBookedSlots from "./containers/adminSide/ViewBookedSlots";

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* AUTHENTICATION PATHS */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            {/* USER SIDE PATHS  */}
            <Route path="/" element={<Home />} />
            <Route path="/user/dashboard/" element={<UserDashboard />} />
            <Route path="/doctors" element={<AllDoctors/>} />
            <Route path="/doctors/booking/:id/" element={<DoctorAppointment/>} />


            {/* DOCTOR SIDE PATHS  */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard/>} />
            {/* ADMIN SIDE PATHS */}
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
            <Route path="/admin/dashboard/doctors" element={<ViewDoctors/>} />
            <Route path="/admin/dashboard/users" element={<ViewUsers/>} />
            <Route path="/admin/dashboard/booked/slots" element={<ViewBookedSlots/>} />

          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
