import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../Assets/SearchInput';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus  } from "react-icons/ai";

const InstallmentSettingList = () => {
  const navigate = useNavigate(); 
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataResult , /*setDataResult*/] = useState([
    { _id: '01',statusTH: "รอยืนยัน", statusEN: "NotConfirmed" },
    { _id: '02',statusTH: "ยืนยันแล้ว", statusEN: "Pending" },
    { _id: '03',statusTH: "อยู่ระหว่างผ่อนชำระ", statusEN: "Installment" },
    { _id: '04',statusTH: "เกินกำหนดชำระ", statusEN: "Overdue" },
    { _id: '05',statusTH: "จ่ายครบทุกงวด", statusEN: "FullyPaid" },
    { _id: '06',statusTH: "ยกเลิก", statusEN: "Cancelled" },
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
      const filtered = items.filter(installmentSetting =>
        installmentSetting.statusTH.toLowerCase().includes(value) ||
        installmentSetting.statusEN.toLowerCase().includes(value)
      );
      
      console.log('Filtered Items:', filtered); 
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };

  const InstallmentSettingCreate = () => {
    navigate(`/installmentsetting/create`); 
  }

  const InstallmentSettingUpdate = id => {
    navigate(`/installmentsetting/update/${id}`); 
  }

  const InstallmentSettingView = id => {
    navigate(`/installmentsetting/view/${id}`); 
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
          <Nav pageName="ผ่อนชำระ Setting" />
          <div className="mt-4 text-4xl ">ผ่อนชำระ Setting</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย สถานะผ่อนชำระ (TH), สถานะผ่อนชำระ (EN)"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={InstallmentSettingCreate} className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' }}>
              <AiOutlinePlus className="w-5 h-5 text-white" />
              <div  className="ml-2 " style={{color:'white'}}>สร้าง</div> 
            </button>
            </div>
            <table className="table-auto w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                <th className="px-4 py-2 text-center">ลำดับ</th>
                <th className="px-4 py-2">สถานะผ่อนชำระ (TH)</th>
                <th className="px-4 py-2">สถานะผ่อนชำระ (EN)</th>
                <th className="px-4 py-2">เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(filteredItems) && filteredItems.map((installmentSetting, index) => (
                <tr key={installmentSetting._id} className="border-t">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{installmentSetting.statusTH}</td>
                  <td className="px-4 py-2 text-center">{installmentSetting.statusEN}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() => InstallmentSettingView(installmentSetting._id)} className="text-black hover:text-gray-700">
                        <AiOutlineEye className="w-5 h-5" />
                      </button>
                      <button onClick={() => InstallmentSettingUpdate(installmentSetting._id)} className="text-black hover:text-gray-700">
                        <AiTwotoneEdit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(installmentSetting._id)} className="text-black hover:text-gray-700">
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
export default InstallmentSettingList;

