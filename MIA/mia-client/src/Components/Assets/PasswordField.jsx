import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // นำเข้าไอคอนตา

const PasswordField = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false); // state เพื่อควบคุมการแสดงรหัสผ่าน

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // เปลี่ยนค่า showPassword เมื่อคลิกไอคอน
  };

  return (
    <div className="relative mb-4">
      <label htmlFor="password" style={{ color: '#006F68' }} className="block text-sm font-medium mb-1">
        {label} {/* กำหนดข้อความกำกับ (label) จาก props */}
      </label>
      <div className="flex items-center">
        <input
          id="password"
          type={showPassword ? "text" : "password"} // เปลี่ยนประเภท input เป็น text หรือ password ตามค่า showPassword
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          value={value}  
          onChange={onChange}  
          placeholder={placeholder}  
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility} // เมื่อคลิกให้เรียกใช้ togglePasswordVisibility
          className="absolute right-3 flex items-center justify-center h-full focus:outline-none"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible className="w-5 h-5 text-gray-500" />
          ) : (
            <AiOutlineEye className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
