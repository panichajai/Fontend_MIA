import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus  } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';

const PDPASetting = () => {
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataResult , setDataResult] = useState([
    {
      id: '01',
      creationDate: "1-11-2566 10:00",
      topic: "Privacy Policy",
      version: "0.0.1",
    },
    {
      id: '02',
      creationDate: "1-11-2566 10:00",
      topic: "Privacy Policy",
      version: "0.0.1",
    },
    {
      id: '03',
      creationDate: "1-11-2566 10:00",
      topic: "Privacy Policy",
      version: "0.0.1",
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
      const filtered = items.filter(pdpa =>
        pdpa.id.toLowerCase().pdpa(value) ||
        pdpa.creationDate.toLowerCase().pdpa(value) ||
        pdpa.topic.toLowerCase().pdpa(value) ||
        pdpa.version.toLowerCase().pdpa(value) 
      );
      
      console.log('Filtered Items:', filtered); 
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };
  const pdpaUpdate = id => {
  }

  const pdpaView = id => {
  }

  const openDeleteModal = id => {
  }
  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
      <div className="w-[248px] bg-gray-100">
          <Menu />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="py-4 pl-6 bg-white">
          <Nav pageName="PDPA Setting" />
          <div className="mt-4 text-4xl ">PDPA Setting</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย Id , ชื่อประชาสัมพันธ์ , หมายเหตุ  "
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
                  <th className="px-4 py-2 text-center">PDPA id</th>
                  <th className="px-4 py-2 text-center">วันที่สร้าง</th>
                  <th className="px-4 py-2 text-center">หัวข้อ</th>
                  <th className="px-4 py-2 text-center">เวอร์ชัน</th>
                  <th className="px-4 py-2 text-center">เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(filteredItems) && filteredItems.map((pdpa, index) => (
                <tr key={pdpa.id} className="border-t">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{pdpa.id}</td>
                  <td className="px-4 py-2 text-center">{pdpa.creationDate}</td>
                  <td className="px-4 py-2 text-center">{pdpa.topic}</td>
                  <td className="px-4 py-2 text-center">{pdpa.version}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() => pdpaView(pdpa._id)} className="text-black hover:text-gray-700">
                        <AiOutlineEye className="w-5 h-5" />
                      </button>
                      <button onClick={() => pdpaUpdate(pdpa._id)} className="text-black hover:text-gray-700">
                        <AiTwotoneEdit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(pdpa._id)} className="text-black hover:text-gray-700">
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
export default PDPASetting;

