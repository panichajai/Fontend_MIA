import React from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { AiOutlinePlus } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';

const PDPALog = () => {

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
      <div className="w-[248px] bg-gray-100">
          <Menu />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="py-4 pl-6 bg-white">
          <Nav pageName="PDPA Log" />
          <div className="mt-4 text-4xl ">PDPA Log</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย Id , ชื่อตัวแทน"
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
                  <th className="px-4 py-2">PDPA id</th>
                  <th className="px-4 py-2">หัวข้อ</th>
                  <th className="px-4 py-2">ชื่อตัวแทน</th>
                  <th className="px-4 py-2">สถานะการยินยอม</th>
                  <th className="px-4 py-2">เครื่องมือ</th>
                </tr>
              </thead>
            </table>
          </div>
      </div>
    </div>
    
  )

  
}
export default PDPALog;

