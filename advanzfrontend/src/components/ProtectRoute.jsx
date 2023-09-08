// ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, isAuthenticated, user, ...rest }) => {
  const isAllowed = isAuthenticated && user;

  if (isAllowed) {
    if (user.is_superuser) {
      return <Navigate to="/admin/dashboard" />;
    } else if (user.is_doctor) {
      return <Navigate to="/doctor/dashboard" />;
    }
  }

  return (
    <Route
      {...rest}
      render={(props) => (isAllowed ? <Component {...props} /> : <Navigate to="/login" />)}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProtectedRoute);
