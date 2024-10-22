import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  const storedToken = token || localStorage.getItem('token');

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token); 
      const currentTime = Date.now() / 1000; 
      return decodedToken.exp < currentTime; 
    } catch (error) {
      console.error("Invalid token:", error);
      return true; 
    }
  };

  if (!storedToken || isTokenExpired(storedToken)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
