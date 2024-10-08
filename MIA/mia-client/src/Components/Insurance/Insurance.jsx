import React from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete,AiOutlinePlus } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';


const Insurance = () => {

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
      <div className="w-[248px] bg-gray-100">
          <Menu />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="py-4 pl-6 bg-white">
          <Nav pageName="กรมธรรม์" />
          <div className="mt-4 text-4xl ">กรมธรรม์</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย เลขที่เอกสาร, เลขที่กรมธรรม์, ชื่อ-สกุลตัวแทน, ชื่อ-สกุลลูกค้า, ทะเบียนรถ, รหัสตัวแทน"
              // value={searchTerm}
              // onChange={handleSearch}
            />
            <button className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' }}>
              <AiOutlinePlus className="w-5 h-5 text-white" />
              <div className="ml-2 " style={{color:'white'}}>สร้าง</div> 
            </button>
            </div>
            <table className="table-auto w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">เลขที่เอกสาร</th>
                  <th className="px-4 py-2">รหัสตัวแทน</th>
                  <th className="px-4 py-2">ตัวแทน</th>
                  <th className="px-4 py-2">ลูกค้า</th>
                  <th className="px-4 py-2">ทะเบียนรถ</th>
                  <th className="px-4 py-2">เครื่องมือ</th>
                </tr>
              </thead>
              <tr className="border-t"> 
                <td className="px-4 py-2">IS6707000001</td>
                <td className="px-4 py-2">AA987654</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">1กด1234</td>
                <td className="px-4 py-2 ">
                  <div className="flex justify-center items-center space-x-4">
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineEye className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700 ">
                      <AiTwotoneEdit className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineDelete  className="w-5 h-5"/>
                      </button>
                  </div>
                </td>
              </tr>
              <tr className="border-t"> 
                <td className="px-4 py-2">IS6707000001</td>
                <td className="px-4 py-2">AA987654</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">1กด1234</td>
                <td className="px-4 py-2 ">
                  <div className="flex justify-center items-center space-x-4">
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineEye className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700 ">
                      <AiTwotoneEdit className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineDelete  className="w-5 h-5"/>
                      </button>
                  </div>
                </td>
              </tr>
              <tr className="border-t"> 
                <td className="px-4 py-2">IS6707000001</td>
                <td className="px-4 py-2">AA987654</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">1กด1234</td>
                <td className="px-4 py-2 ">
                  <div className="flex justify-center items-center space-x-4">
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineEye className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700 ">
                      <AiTwotoneEdit className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineDelete  className="w-5 h-5"/>
                      </button>
                  </div>
                </td>
              </tr>
              <tr className="border-t"> 
                <td className="px-4 py-2">IS6707000001</td>
                <td className="px-4 py-2">AA987654</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">1กด1234</td>
                <td className="px-4 py-2 ">
                  <div className="flex justify-center items-center space-x-4">
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineEye className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700 ">
                      <AiTwotoneEdit className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineDelete  className="w-5 h-5"/>
                      </button>
                  </div>
                </td>
              </tr>
              <tr className="border-t"> 
                <td className="px-4 py-2">IS6707000001</td>
                <td className="px-4 py-2">AA987654</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">1กด1234</td>
                <td className="px-4 py-2 ">
                  <div className="flex justify-center items-center space-x-4">
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineEye className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700 ">
                      <AiTwotoneEdit className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineDelete  className="w-5 h-5"/>
                      </button>
                  </div>
                </td>
              </tr>
              <tr className="border-t"> 
                <td className="px-4 py-2">IS6707000001</td>
                <td className="px-4 py-2">AA987654</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">สิทธิกร บุญเรืองขาว</td>
                <td className="px-4 py-2">1กด1234</td>
                <td className="px-4 py-2 ">
                  <div className="flex justify-center items-center space-x-4">
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineEye className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700 ">
                      <AiTwotoneEdit className="w-5 h-5"/>
                      </button>
                      <button  className="text-black hover:text-gray-700">
                      <AiOutlineDelete  className="w-5 h-5"/>
                      </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
      </div>
    </div>

    
  )

  
}
export default Insurance;

