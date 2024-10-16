import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../Assets/SearchInput';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus  } from "react-icons/ai";

const AdminUserList = () => {
  const navigate = useNavigate(); 
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataResult , /*setDataResult*/] = useState([
    
    {
      _id: 1,
      name: "สิทธิกร บุญเรืองขาว",
      position: "เจ้าหน้าที่ประชาสัมพันธ์",
      email: "Mockup@gmail.com",
      role: "แอดมิน",
      consentStatus: "ยืนยัน", 
      consentColor: "green", 
    },
    {
      _id: 2,
      name: "สิทธิกร บุญเรืองขาว",
      position: "เจ้าหน้าที่ประชาสัมพันธ์",
      email: "Mockup@gmail.com",
      role: "แอดมิน",
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
      const filtered = items.filter(admin =>
        admin.name.toLowerCase().includes(value) ||
        admin.position.toLowerCase().includes(value) ||
        admin.email.toLowerCase().includes(value) ||
        admin.role.toLowerCase().includes(value) 
      );
      
      console.log('Filtered Items:', filtered); 
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };

  const AdminUserCreate = () => {
    navigate(`/adminuser/create`); 
  }

  const AdminUserUpdate = id => {
    navigate(`/adminuser/update/${id}`); 
  }

  const AdminUserView = id => {
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
              <Nav pageName="AdminUser" />
            <div className="mt-4 text-4xl ">AdminUser</div>        
            </div>
            <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย ชื่อ, นามสกุล, เบอร์โทรศัพท์ หรือ บัตรประชาชน"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={AdminUserCreate} className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' }}>
              <AiOutlinePlus className="w-5 h-5 text-white" />
              <div className="ml-2 " style={{color:'white'}}>สร้าง</div> 
            </button>
          </div>
          <table className="table-auto w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-center">ลำดับ</th>
                <th className="px-4 py-2 text-center">ชื่อ นามสกุล</th>
                <th className="px-4 py-2 text-center">ตำแหน่ง</th>
                <th className="px-4 py-2 text-center">อีเมล</th>
                <th className="px-4 py-2 text-center">บทบาท</th>
                <th className="px-4 py-2 text-center">สถานะ</th>
                <th className="px-4 py-2 text-center">เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(filteredItems) && filteredItems.map((admin, index) => (
                <tr key={admin._id} className="border-t">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{admin.name}</td>
                  <td className="px-4 py-2 text-center">{admin.position}</td>
                  <td className="px-4 py-2 text-center">{admin.email}</td>
                  <td className="px-4 py-2 text-center">{admin.role}</td>
                  <td className="px-4 py-2 text-center">
                    <span style={{ color: admin.consentColor }}>
                      ● {admin.consentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() => AdminUserView(admin._id)} className="text-black hover:text-gray-700">
                        <AiOutlineEye className="w-5 h-5" />
                      </button>
                      <button onClick={() => AdminUserUpdate(admin._id)} className="text-black hover:text-gray-700">
                        <AiTwotoneEdit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(admin._id)} className="text-black hover:text-gray-700">
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

    
  )

  
}
export default AdminUserList;

