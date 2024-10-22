import React, { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

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

  const login = (token) => {
    if (!isTokenExpired(token)) {
      localStorage.setItem("token", token);
      setToken(token);
    } else {
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      logout(); 
    }
  }, [token, navigate]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
