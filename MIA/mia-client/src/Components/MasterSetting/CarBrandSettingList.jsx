import { useState, useEffect, useCallback }  from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineEye, AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';

const CarBrandSettingList = () => {
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();

  const CarBrandSettingCreate = () => {
    navigate(`/carbrandsetting/create`); 
  }

  const CarBrandSettingUpdate = id => {
    navigate(`/carbrandsetting/update/${id}`); 
  }

  const CarBrandSettingView = id => {
    navigate(`/carbrandsetting/view/${id}`); 
  }

  const [dataResult , /*setDataResult*/] = useState([
    {
      _id:1,
      documentNumber: "IS6707000001",
      agentCode: "AA987654",
      
    },
    {
      _id:2,
      documentNumber: "IS6707000002",
      agentCode: "AA987654",
      
    },
    {
      _id:3,
      documentNumber: "IS6707000003",
      agentCode: "AA987654",
      
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
      
      console.log('Filtered Items:', filtered); 
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };

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
          <Nav pageName="ยี่ห้อรถ Settings" />
          <div className="mt-4 text-4xl ">ยี่ห้อรถ Settings</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย ค้นหาด้วย Brand (EN), Model (EN)"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={CarBrandSettingCreate} className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' }}>
              <AiOutlinePlus className="w-5 h-5 text-white" />
              <div className="ml-2" style={{ color: 'white' }}>สร้าง</div>
            </button>
            </div>
            <table className="table-auto w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Brand (EN)</th>
                  <th className="px-4 py-2">Brand (EN)</th>
                  <th className="px-4 py-2">เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
                   {Array.isArray(filteredItems) && filteredItems.map((insurance, index) => (
                  <tr key={insurance._id} className="border-t">
                    <td className="px-4 py-2 text-center">{insurance.documentNumber}</td>
                    <td className="px-4 py-2 text-center">{insurance.agentCode}</td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex justify-center items-center space-x-4">
                          <button onClick={() => CarBrandSettingView(insurance._id)} className="text-black hover:text-gray-700">
                            <AiOutlineEye className="w-5 h-5"/>
                          </button>
                          <button onClick={() => CarBrandSettingUpdate(insurance._id)} className="text-black hover:text-gray-700 ">
                            <AiTwotoneEdit className="w-5 h-5"/>
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
export default CarBrandSettingList;

