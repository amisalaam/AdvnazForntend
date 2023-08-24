import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Layout from "./hocs/Layout";
import Home from "./containers/userSide/home";
import Login from "./containers/authentication/login";
import Signup from "./containers/authentication/signup";
import Activate from "./containers/authentication/activate";
import ResetPassword from "./containers/authentication/resetpassword";
import DoctorDashboard from "./containers/doctorSide/doctorDashboard";
import ResetPasswordConfirm from "./containers/authentication/ResetPasswordConfirmPage";
import AdminDashboard from "./containers/adminSide/adminDashboard";
import DoctorAppointment from "./containers/userSide/DoctorAppointment";
import AllDoctors from "./containers/userSide/AllDoctors";
import UserDashboard from "./containers/userSide/Dashboard/UserDashboard";
import ViewDoctors from "./containers/adminSide/ViewDoctors";
import ViewUsers from "./containers/adminSide/viewUsers";
import AdminViewSlots from "./containers/adminSide/ViewSlots";
import ViewSlots from "./containers/doctorSide/ViewSlots";
import ViewBooking from "./containers/doctorSide/ViewBooking";
import AdminViewBooking from "./containers/adminSide/ViewAllBooking";
import UserViewBooking from "./containers/userSide/Dashboard/UserViewBooking";
import PrivateRoute from "./containers/authentication/Routes/PrivateRoute";
import ViewDepartments from "./containers/adminSide/ViewDepartments";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* NO AUTHENTICARTED USER SIDE PATHS  */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<AllDoctors />} />

            {/*  AUTHENTICARTED USER SIDE PATHS  */}
            <Route path="/user/dashboard" element={<PrivateRoute only_user />}>
              <Route path="booking" element={<UserViewBooking />} />
              <Route index element={<UserDashboard />} />
            </Route>
            <Route path="/user/booking/:id" element={<PrivateRoute only_user />}>
            <Route index element={<DoctorAppointment />} />
            </Route>
            {/* DOCTOR SIDE PATHS  */}
            <Route
              path="/doctor/dashboard"
              element={<PrivateRoute is_doctor />}
            >
              <Route index element={<DoctorDashboard />} />
              <Route path="slots" element={<ViewSlots />} />
              <Route path="booking" element={<ViewBooking />} />
            </Route>
            {/* ADMIN SIDE PATHS */}
            <Route
              path="/admin/dashboard"
              element={<PrivateRoute is_superuser />}
            >
              <Route index element={<AdminDashboard />} />
              <Route path="doctors" element={<ViewDoctors />} />
              <Route path="users" element={<ViewUsers />} />
              <Route path="slots" element={<AdminViewSlots />} />
              <Route path="booking" element={<AdminViewBooking />} />
              <Route path="department" element={<ViewDepartments />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
