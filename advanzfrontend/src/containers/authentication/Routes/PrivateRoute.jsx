import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, is_superuser, is_doctor, only_user }) => {
  const [attemptedRoute, setAttemptedRoute] = useState(null);

  if (!user) {
    return <Navigate to="/login" />;
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

  if (attemptedRoute) {
    const route = attemptedRoute;
    setAttemptedRoute(null); // Clear the stored route
    return <Navigate to={route} replace />;
  }

  return <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PrivateRoute);
