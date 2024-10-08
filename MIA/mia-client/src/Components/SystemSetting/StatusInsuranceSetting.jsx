import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus  } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';

const StatusInsuranceSetting = () => {
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataResult , setDataResult] = useState([
    { statusTH: "กรรมธรรม์ยังมีผลคุ้มครอง", statusEN: "Active Policy", code: "A" },
    { statusTH: "กรรมธรรม์ยกเลิก", statusEN: "Cancel Policies", code: "C" },
    { statusTH: "กรรมธรรม์ขาดต่อ / ใบเสนอราคาที่ไม่ประสงค์ทำประกันภัย", statusEN: "Lapsed Policies", code: "L" },
    { statusTH: "กรรมธรรม์ที่ใบสมบูรณ์", statusEN: "Pending Policies", code: "P" },
    { statusTH: "ใบเสนอราคา", statusEN: "Quotes", code: "Q" },
    { statusTH: "กรรมธรรม์ที่ในขั้นตอน PR", statusEN: "Archived Policies", code: "R" },
  ]);
  const UserGet = useCallback(() => {
    setItems(dataResult);
    setFilteredItems(dataResult);
  }, [dataResult]);
  useEffect(() => {
    UserGet();
  }, [UserGet]);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    console.log("handleSearch value :", value);
    setSearchTerm(value);
    if (items.length > 0) {
      const filtered = items.filter( statusInsuranceSetting =>
        statusInsuranceSetting.statusTH.toLowerCase().includes(value) ||
        statusInsuranceSetting.statusEN.toLowerCase().includes(value) ||
        statusInsuranceSetting.version.code().includes(value) 
      );
      
      console.log('Filtered Items:', filtered); // ตรวจสอบผลลัพธ์ของการกรอง
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };
  const statusInsuranceSettingUpdate = id => {
    // navigate(`/customer/update/${id}`); 
  }

  const statusInsuranceSettingView = id => {
    // navigate(`/customer/view/${id}`); 
  }

  // const IncludesCreate = () => {
  //   // navigate(`/customer/create`); 
  // }

  const openDeleteModal = id => {
    // setSelectedCustomerId(id);
    // setModalIsOpen(true);
  }
  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
      <div className="w-[248px] bg-gray-100">
          <Menu />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="py-4 pl-6 bg-white">
          <Nav pageName="สถานะกรมธรรม์ Setting" />
          <div className="mt-4 text-4xl ">สถานะกรมธรรม์ Setting</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย ชื่อสถานะ (TH), ชื่อสถานะ (EN), Code"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' }}>
              <AiOutlinePlus className="w-5 h-5 text-white" />
              <div className="ml-2 " style={{color:'white'}}>สร้าง</div> 
            </button>
            </div>
            <table className="table-auto w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                <th className="px-4 py-2 text-center">ลำดับ</th>
                <th className="px-4 py-2 text-center">ชื่อสถานะ (TH) </th>
                <th className="px-4 py-2 text-center">ชื่อสถานะ (EN) </th>
                <th className="px-4 py-2 text-center">Code</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(filteredItems) && filteredItems.map(( statusInsuranceSetting, index) => (
                <tr key={ statusInsuranceSetting._id} className="border-t">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{ statusInsuranceSetting.statusTH}</td>
                  <td className="px-4 py-2 text-center">{ statusInsuranceSetting.statusEN}</td>
                  <td className="px-4 py-2 text-center">{ statusInsuranceSetting.code}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() => statusInsuranceSettingView(statusInsuranceSetting._id)} className="text-black hover:text-gray-700">
                        <AiOutlineEye className="w-5 h-5" />
                      </button>
                      <button onClick={() => statusInsuranceSettingUpdate(statusInsuranceSetting._id)} className="text-black hover:text-gray-700">
                        <AiTwotoneEdit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(statusInsuranceSetting._id)} className="text-black hover:text-gray-700">
                        <AiOutlineDelete className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
      </div>
    </div>

    
  )

  
}
export default StatusInsuranceSetting;

