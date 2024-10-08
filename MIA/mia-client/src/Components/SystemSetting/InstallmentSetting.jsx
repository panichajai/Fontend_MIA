import React from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { AiOutlinePlus } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';

const InstallmentSetting = () => {

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
      <div className="w-[248px] bg-gray-100">
          <Menu />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="py-4 pl-6 bg-white">
          <Nav pageName="ผ่อนชำระ Setting" />
          <div className="mt-4 text-4xl ">ผ่อนชำระ Setting</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย สถานะผ่อนชำระ (TH), สถานะผ่อนชำระ (EN)"
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
                  <th className="px-4 py-2">สถานะผ่อนชำระ (TH)</th>
                  <th className="px-4 py-2">สถานะผ่อนชำระ (EN)</th>
                  <th className="px-4 py-2">เครื่องมือ</th>
                </tr>
              </thead>
            </table>
          </div>
      </div>
    </div>

    
  )

  
}
export default InstallmentSetting;

