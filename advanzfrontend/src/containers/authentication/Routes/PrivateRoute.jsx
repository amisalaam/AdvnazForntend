import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, is_superuser, is_doctor, only_user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  if (is_superuser && user.is_superuser) {
    
    return <Outlet />;
  }

  if (is_doctor && user.is_doctor) {
    
    return <Outlet />;
  }

  if (only_user && user.is_active) {
  
    return <Outlet />;
  }

  
  return <Navigate to="/" />;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PrivateRoute);
