import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  // ดึง token จาก AuthContext
  const { token } = useAuth();

  // ดึง token จาก localStorage เผื่อกรณีที่ reload หน้า
  const storedToken = localStorage.getItem('token');

  // ตรวจสอบว่ามี token อยู่หรือไม่ ถ้าไม่มีจะ redirect ไปหน้า login
  return token || storedToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
