import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus  } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';

const RoleSettingList = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataResult , /*setDataResult*/] = useState([
    {
      _id: 1,
      nameTH: "แอดมิน",
      nameEN: "Admin",
    },
    {
      _id: 2,
      nameTH: "พนักงาน",
      nameEN: "Staff",
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
      const filtered = items.filter(role =>
        role.nameTH.toLowerCase().includes(value) ||
        role.nameEN.toLowerCase().includes(value)
       
      );
      
      console.log('Filtered Items:', filtered); 
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };

  const RoleSettingCreate = () => {
    navigate(`/rolesetting/create`); 
  }

  const roleUpdate = id => {
  }

  const roleView = id => {
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
          <Nav pageName="RoleSetting" />
          <div className="mt-4 text-4xl ">RoleSetting</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย ค้นหาด้วย ตำแหน่ง"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' }}>
              <AiOutlinePlus className="w-5 h-5 text-white" />
              <div onClick={RoleSettingCreate} className="ml-2 " style={{color:'white'}}>สร้าง</div> 
            </button>
            </div>
            <table className="table-auto w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-center">ลำดับ</th>
                <th className="px-4 py-2 text-center">ตำแหน่ง (TH)</th>
                <th className="px-4 py-2 text-center">ตำแหน่ง (EN)</th>
                <th className="px-4 py-2 text-center">เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(filteredItems) && filteredItems.map((role, index) => (
                <tr key={role._id} className="border-t">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{role.nameTH}</td>
                  <td className="px-4 py-2 text-center">{role.nameEN}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() =>roleView(role._id)} className="text-black hover:text-gray-700">
                        <AiOutlineEye className="w-5 h-5" />
                      </button>
                      <button onClick={() => roleUpdate(role._id)} className="text-black hover:text-gray-700">
                        <AiTwotoneEdit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(role._id)} className="text-black hover:text-gray-700">
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
export default RoleSettingList;

