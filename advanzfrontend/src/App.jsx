import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Layout from "./hocs/Layout";
import Home from "./containers/userSide/home";
import Login from "./containers/authentication/login";
import Signup from "./containers/authentication/signup";
import Activate from "./containers/authentication/activate";
import ResetPassword from "./containers/authentication/resetpassword";
import ResetPasswordConfirm from "./containers/authentication/ResetPasswordConfirm";
import DoctorDashboard from "./containers/doctorSide/doctorDashboard";
import AdminDashboard from "./containers/adminSide/adminDashboard";
import DoctorAppointment from "./containers/userSide/DoctorAppointment";
import AllDoctors from "./containers/userSide/AllDoctors";
import UserDashboard from "./containers/userSide/Dashboard/UserDashboard";
// import DoctorAppointment from "./containers/userSide/DoctorAppointment";
import ViewDoctors from "./containers/adminSide/ViewDoctors";
import ViewUsers from "./containers/adminSide/viewUsers";

import AdminViewSlots from "./containers/adminSide/ViewSlots";
import ViewSlots from "./containers/doctorSide/ViewSlots";
import ViewBooking from "./containers/doctorSide/ViewBooking";
import AdminViewBooking from "./containers/adminSide/ViewAllBooking";
import UserViewBooking from "./containers/userSide/Dashboard/UserViewBooking";

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
            <Route path="/user/dashboard/booking" element={<UserViewBooking/>} />



            {/* DOCTOR SIDE PATHS  */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard/>} />
            <Route path="/doctor/dashboard/slots" element={<ViewSlots/>} />
            <Route path="/doctor/dashboard/booking" element={<ViewBooking/>} />
            {/* ADMIN SIDE PATHS */}
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
            <Route path="/admin/dashboard/doctors" element={<ViewDoctors/>} />
            <Route path="/admin/dashboard/users" element={<ViewUsers/>} />
            <Route path="/admin/dashboard/slots" element={<AdminViewSlots/>} />
            <Route path="/admin/dashboard/booking" element={<AdminViewBooking/>} />

          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
