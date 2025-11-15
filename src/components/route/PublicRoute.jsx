import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuth, children }) => {
  return !isAuth ? children : <Navigate to="/notes" replace />;
};

export default PublicRoute;
