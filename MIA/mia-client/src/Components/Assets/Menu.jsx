import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import { FaHome, FaUser, FaShieldAlt, FaCogs, FaSignOutAlt, FaChevronDown, FaLeaf, FaTools } from 'react-icons/fa';

const Menu = () => {
  const [isOpenMaster, setIsOpenMaster] = useState(false);
  const [isOpenAdmin, setIsOpenAdmin] = useState(false);
  const [isOpenSystem, setIsOpenSystem] = useState(false);

  return (
    <div className="flex flex-col h-screen w-[248px] bg-white" >
      <div className="flex items-center justify-center ">
        <img src={logo} alt="logo mittare" className="h-[136] w-[248px]"/>
      </div>
      <ul className="space-y-2">
        <li className="p-2 ">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <FaHome className="w-5 h-5"/>
            <div className="w-full text-left pl-[10px]">หน้าหลัก</div>
            <FaChevronDown className="ml-auto" />
          </button>
        </li>
        <li className="p-2">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <FaUser className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">ลูกค้า</div>
          </button>
        </li>
        <li className="p-2">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <FaShieldAlt className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">กรมธรรม์</div>
          </button>
        </li>

        {/* Master Setting */}
        <li className="p-2">
          <button
            onClick={() => setIsOpenMaster(!isOpenMaster)}
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 w-full rounded w-full px-[24px]"
          >
            <FaCogs className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">Master Setting</div>
            <FaChevronDown className={`ml-auto ${isOpenMaster ? 'transform rotate-180' : ''}`} />
          </button>
          {isOpenMaster && (
            <ul className="pl-8 space-y-1">
              <li><button className="block p-1 text-gray-600 hover:text-gray-900">ตั้งค่า 1</button></li>
              <li><button className="block p-1 text-gray-600 hover:text-gray-900">ตั้งค่า 2</button></li>
            </ul>
          )}
        </li>

        {/* Admin */}
        <li className="p-2">
          <button
            onClick={() => setIsOpenAdmin(!isOpenAdmin)}
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 w-full rounded w-full px-[24px]"
          >
            <FaTools className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">Admin</div>
            <FaChevronDown className={`ml-auto ${isOpenAdmin ? 'transform rotate-180' : ''}`} />
          </button>
          {isOpenAdmin && (
            <ul className="pl-8 space-y-1">
              <li><button className="block p-1 text-gray-600 hover:text-gray-900">จัดการ 1</button></li>
              <li><button className="block p-1 text-gray-600 hover:text-gray-900">จัดการ 2</button></li>
            </ul>
          )}
        </li>

        {/* System Setting */}
        <li className="p-2">
          <button
            onClick={() => setIsOpenSystem(!isOpenSystem)}
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 w-full rounded w-full px-[24px]"
          >
            <FaLeaf className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">System Setting</div>
            <FaChevronDown className={`ml-auto ${isOpenSystem ? 'transform rotate-180' : ''}`} />
          </button>
          {isOpenSystem && (
            <ul className="pl-8 space-y-1">
              <li><button className="block p-1 text-gray-600 hover:text-gray-900">ระบบ 1</button></li>
              <li><button className="block p-1 text-gray-600 hover:text-gray-900">ระบบ 2</button></li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li className="p-2">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <FaSignOutAlt className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">ออกจากระบบ</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
