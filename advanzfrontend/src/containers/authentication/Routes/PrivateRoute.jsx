import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, is_superuser, is_doctor, only_user }) => {
  const isAuthenticated = !!user;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if ((is_superuser && user.is_superuser) || (is_doctor && user.is_doctor) || (only_user && user.is_active)) {
    return <Outlet />;
  }
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PrivateRoute);