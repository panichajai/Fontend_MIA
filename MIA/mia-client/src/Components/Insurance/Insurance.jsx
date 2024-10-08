import { useState, useEffect, useCallback }  from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete,AiOutlinePlus } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';
// import API_BASE_URL from '../../config';

const Insurance = () => {
  // const api = API_BASE_URL;
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // เก็บค่าที่ผู้ใช้พิมพ์สำหรับค้นหา
  const [dataResult , setDataResult] = useState([
    {
      id:1,
      documentNumber: "IS6707000001",
      agentCode: "AA987654",
      agentName: "สิทธิกร บุญเรืองขาว",
      customer: "สมชาย เป็นชาย",
      vehicleNumber: "1กด1111",
    },
    {
      id:2,
      documentNumber: "IS6707000002",
      agentCode: "AA987654",
      agentName: "สิทธิกร บุญเรืองขาว",
      customer: "สมหญิง เป็นหญิง",
      vehicleNumber: "2กด2222",
    },
    {
      id:3,
      documentNumber: "IS6707000003",
      agentCode: "AA987654",
      agentName: "สิทธิกร บุญเรืองขาว",
      customer: "รักยิ้ม รักกัน",
      vehicleNumber: "3กด3333",
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
      const filtered = items.filter(insurance =>
        insurance.documentNumber.toLowerCase().includes(value) ||
        insurance.agentCode.toLowerCase().includes(value) ||
        insurance.agentName.toLowerCase().includes(value) ||
        insurance.customer.toLowerCase().includes(value) ||
        insurance.vehicleNumber.toLowerCase().includes(value)
      );
      
      console.log('Filtered Items:', filtered); // ตรวจสอบผลลัพธ์ของการกรอง
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };
  const IncludesUpdate = id => {
    // navigate(`/customer/update/${id}`); 
  }

  const IncludesView = id => {
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
          <Nav pageName="กรมธรรม์" />
          <div className="mt-4 text-4xl ">กรมธรรม์</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย เลขที่เอกสาร, เลขที่กรมธรรม์, ชื่อ-สกุลตัวแทน, ชื่อ-สกุลลูกค้า, ทะเบียนรถ, รหัสตัวแทน"
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
                <th className="px-4 py-2 text-center">เลขที่เอกสาร</th>
                <th className="px-4 py-2 text-center">รหัสตัวแทน</th>
                <th className="px-4 py-2 text-center">ตัวแทน</th>
                <th className="px-4 py-2 text-center">ลูกค้า</th>
                <th className="px-4 py-2 text-center">ทะเบียนรถ</th>
                <th className="px-4 py-2 text-center">เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(filteredItems) && filteredItems.map((insurance, index) => (
                <tr key={insurance._id} className="border-t">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{insurance.documentNumber}</td>
                  <td className="px-4 py-2 text-center">{insurance.agentCode}</td>
                  <td className="px-4 py-2 text-center">{insurance.agentName}</td>
                  <td className="px-4 py-2 text-center">{insurance.customer}</td>
                  <td className="px-4 py-2 text-center">{insurance.vehicleNumber}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() => IncludesView(insurance._id)} className="text-black hover:text-gray-700">
                        <AiOutlineEye className="w-5 h-5" />
                      </button>
                      <button onClick={() => IncludesUpdate(insurance._id)} className="text-black hover:text-gray-700">
                        <AiTwotoneEdit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(insurance._id)} className="text-black hover:text-gray-700">
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
export default Insurance;

