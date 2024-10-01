import React from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const InputSearch = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  return (
    <div className="flex flex-nowrap space-x-4 w-full p-6">
      {/* ช่องค้นหาที่ 1 */}
      <div className="flex border border-gray-300 overflow-hidden w-full">
        <input type="text" className="px-4 py-2 focus:outline-none w-full" placeholder="ชื่อ, นามสกุล หรือ อีเมล " />
        <button className="px-4 text-gray-400 bg-white border-l border-gray-300 ">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5 " />
        </button>
      </div>

      {/* ช่องค้นหาที่ 2 */}
      <div className="flex border border-gray-300 overflow-hidden w-full">
        <input type="text" className="px-4 py-2 focus:outline-none w-full" placeholder="เบอร์โทร" />
        <button className="px-4 text-gray-400 bg-white border-l border-gray-300">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
        </button>
      </div>

      {/* ช่องค้นหาที่ 3 */}
      <div className="flex border border-gray-300 overflow-hidden w-full">
        <input type="text" className="px-4 py-2 focus:outline-none w-full" placeholder="เลขที่เอกสาร, เลขที่กรมธรรม์ หรือ ทะเบียนรถ" />
        <button className="px-4 text-gray-400 bg-white border-l border-gray-300">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
        </button>
      </div>
        <button onClick={() => navigate('/customercreate')} className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 " style={{ backgroundColor: '#006F68' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <div className="ml-2" style={{color:'white'}}>สร้าง</div> 
        </button>
    </div>
    
  );
}

export default InputSearch;
