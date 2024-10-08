import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import { AiOutlineDown, AiOutlineUser, AiOutlineUnorderedList , AiOutlineInsurance , AiOutlineSetting, AiOutlineHighlight, AiOutlineApi, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [isOpenMaster, setIsOpenMaster] = useState(false);
  const [isOpenAdmin, setIsOpenAdmin] = useState(false);
  const [isOpenSystem, setIsOpenSystem] = useState(false);
  const navigate = useNavigate();
  const OnChangePage  = page => {
    if(page === "logout" ) {
        localStorage.removeItem('token');  // ลบ token ออกจาก localStorage
        navigate('/login');  // redirect ไปหน้า login
    }
    else { 
      navigate(`/${page}`); 
    }
    
  }
  return (
    <div className="flex flex-col h-screen w-[248px] bg-white" >
      <div className="flex items-center justify-center ">
        <img src={logo} alt="logo mittare" className="h-[136] w-[248px]"/>
      </div>
      <ul className="space-y-2">
        <li className="p-2 ">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <AiOutlineUnorderedList  className="w-5 h-5"/>
            <div onClick={() => OnChangePage ('')} className="w-full text-left pl-[10px]">หน้าหลัก</div>
            {/* <AiOutlineDown  className="ml-auto" /> */}
          </button>
        </li>
        <li className="p-2">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <AiOutlineUser className="w-5 h-5" />
            <div onClick={() => OnChangePage ('customer')} className="w-full text-left pl-[10px]">ลูกค้า</div>
          </button>
        </li>
        <li className="p-2">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <AiOutlineInsurance  className="w-5 h-5" />
            <div onClick={() => OnChangePage ('Insurance')} className="w-full text-left pl-[10px]">กรมธรรม์</div>
          </button>
        </li>

        {/* Master Setting */}
        <li className="p-2">
          <button
            onClick={() => setIsOpenMaster(!isOpenMaster)}
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 w-full rounded w-full px-[24px]"
          >
            <AiOutlineSetting  className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">Master Setting</div>
            <AiOutlineDown  className={`ml-auto ${isOpenMaster ? 'transform rotate-180' : ''}`} />
          </button>
          {isOpenMaster && (
            <ul className="pl-8 space-y-2">
              <li><button onClick={() => OnChangePage ('CarBrandSetting')} className="block p-1 text-gray-600 hover:text-gray-900">ยี่ห้อรถ Settings</button></li>
              {/* <li><button onClick={() => OnChangePage ('')} className="block p-1 text-gray-600 hover:text-gray-900">คำนำหน้าชื่อ (Hide)</button></li> */}
            </ul>
          )}
        </li>

        {/* Admin */}
        <li className="p-2">
          <button
            onClick={() => setIsOpenAdmin(!isOpenAdmin)}
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 w-full rounded w-full px-[24px]"
          >
            <AiOutlineHighlight  className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">Admin</div>
            <AiOutlineDown className={`ml-auto ${isOpenAdmin ? 'transform rotate-180' : ''}`} />
          </button>
          {isOpenAdmin && (
            <ul className="pl-8 space-y-2">
              <li><button onClick={() => OnChangePage ('adminuser')} className="block p-1 text-gray-600 hover:text-gray-900">Admin User</button></li>
              <li><button onClick={() => OnChangePage ('rolesetting')} className="block p-1 text-gray-600 hover:text-gray-900">Role Setting</button></li>
              <li><button onClick={() => OnChangePage ('pdpalog')} className="block p-1 text-gray-600 hover:text-gray-900">PDPA Log</button></li>
              <li><button onClick={() => OnChangePage ('pdpasetting')} className="block p-1 text-gray-600 hover:text-gray-900">PDPA Setting</button></li>
            </ul>
          )}
        </li>

        {/* System Setting */}
        <li className="p-2">
          <button
            onClick={() => setIsOpenSystem(!isOpenSystem)}
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 w-full rounded w-full px-[24px]"
          >
            <AiOutlineApi  className="w-5 h-5" />
            <div className="w-full text-left pl-[10px]">System Setting</div>
            <AiOutlineDown  className={`ml-auto ${isOpenSystem ? 'transform rotate-180' : ''}`} />
          </button>
          {isOpenSystem && (
            <ul className="pl-8 space-y-2">
              <li><button onClick={() => OnChangePage ('installmentsetting')} className="block p-1 text-gray-600 hover:text-gray-900">ผ่อนชำระ Setting</button></li>
              <li><button onClick={() => OnChangePage ('projectsetting')} className="block p-1 text-gray-600 hover:text-gray-900">เข้าร่วมโครงการ Setting</button></li>
              <li><button onClick={() => OnChangePage ('statusinsurancesetting')} className="block p-1 text-gray-600 hover:text-gray-900">สถานะกรมธรรม์ Setting</button></li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li className="p-2">
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded w-full px-[24px]">
            <AiOutlineLogout  className="w-5 h-5" />
            <div onClick={() => OnChangePage('logout')} className="w-full text-left pl-[10px]">ออกจากระบบ</div>
          </button>
        </li>
      </ul>
    </div>
  );


};

export default Menu;
