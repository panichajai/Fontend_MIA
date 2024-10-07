// AuthContext.js
import React, { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// สร้าง context สำหรับ Auth
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับ login
  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  // ฟังก์ชันสำหรับ logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  // ตรวจสอบว่ามี token หรือไม่ ถ้าไม่มีจะ redirect ไปหน้า login
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
