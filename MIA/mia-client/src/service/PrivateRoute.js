import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  const storedToken = localStorage.getItem('token');

  return token || storedToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
