import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { AiOutlineEye, AiOutlinePlus  } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';

const PDPALog = () => {
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataResult , setDataResult] = useState([
    {
      id: '01',
      topic: "text",
      name: "สิทธิกร บุญเรืองขาว",
      consentStatus: "ยืนยัน", 
      consentColor: "green",  
    },
    {
      id: '02',
      topic: "text",
      name: "สิทธิกร บุญเรืองขาว",
      consentStatus: "ปฏิเสธ",  
      consentColor: "red", 
    },
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
      const filtered = items.filter(papaLog =>
        papaLog.topic.toLowerCase().includes(value) ||
        papaLog.name.toLowerCase().includes(value) ||
        papaLog.consentStatus.toLowerCase().includes(value) ||
        papaLog.role.toLowerCase().includes(value) 
      );
      
      console.log('Filtered Items:', filtered); // ตรวจสอบผลลัพธ์ของการกรอง
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };

  const papaLogView = id => {
    // navigate(`/customer/view/${id}`); 
  }

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
                 <th className="px-4 py-2 text-center">No</th>
                  <th className="px-4 py-2 text-center">PDPA id</th>
                  <th className="px-4 py-2 text-center">หัวข้อ</th>
                  <th className="px-4 py-2 text-center">ชื่อตัวแทน</th>
                  <th className="px-4 py-2 text-center">สถานะการยินยอม</th>
                  <th className="px-4 py-2 text-center">เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(filteredItems) && filteredItems.map((papaLog, index) => (
                <tr key={papaLog.id} className="border-t">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{papaLog.id}</td>
                  <td className="px-4 py-2 text-center">{papaLog.topic}</td>
                  <td className="px-4 py-2 text-center">{papaLog.name}</td>
                  <td className="px-4 py-2 text-center">
                    <span style={{ color: papaLog.consentColor }}>
                      ● {papaLog.consentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() => papaLogView(papaLog._id)} className="text-black hover:text-gray-700">
                        <AiOutlineEye className="w-5 h-5" />
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
export default PDPALog;

