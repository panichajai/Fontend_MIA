import { useState, useEffect, useCallback }  from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import Tab from '../Assets/Tab';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus, AiOutlineCloseCircle  } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';
import API_BASE_URL from '../../config';
import TableWithPagination from '../Assets/TableWithPagination';
import Popup from '../Assets/Popup';

const Insurance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [selectedInstallmentId, setSelectedInstallmentId] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const api = API_BASE_URL;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const tabs = [
    { id: 'tab1', label: 'รอยืนยัน​เอกสาร', link: ' ' },
    { id: 'tab2', label: 'ยืนยัน​เอกสารผ่อน', link: ' ' },
    { id: 'tab3', label: 'ออกกรมธรรม์ Active', link: ' ' },
    { id: 'tab4', label: 'กรมธรรม์ Inactive', link: ' ' },
    { id: 'tab5', label: 'ยกเลิกเอกสาร', link: ' ' }
  ];
  

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setCurrentPage(1); 
  };

  const InsuranceUpdate = id => {
    navigate(`/insurance/update/${id}`); 
  }

  const InsuranceView = id => {
    navigate(`/insurance/view/${id}`); 
  }

  const InsuranceCreate = () => {
    navigate(`/insurance/create`); 
  }


  const UserGet = useCallback(() => {
    setLoading(true);
    fetch(api + "setting/installment")
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setItems(result.data);
        setFilteredItems(result.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false); 
      });
  }, [api]); 

  
  useEffect(() => {
    UserGet();
  }, [UserGet])

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
    setSelectedInstallmentId(id);
    setModalIsOpen(true);
  }

  const closeDeleteModal = () => {
    setModalIsOpen(false);
    setSelectedInstallmentId(null);
  }

  const handleDeleteConfirm = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(api+`setting/installment/${selectedInstallmentId}`, requestOptions) 
      .then((response) => response.json())
      .then((result) => {
        alert(result['message']);
        if (result['status'] === 200) {
          UserGet(); 
          closeDeleteModal(); 
        }
      })
      .catch((error) => console.error(error));
  }

  const columns = ['สถานะผ่อนชำระ (TH)', 'สถานะผ่อนชำระ (EN)', 'เครื่องมือ'];

  const formattedData = filteredItems.map((installment) => ({
    'สถานะผ่อนชำระ (TH)': installment.statusTH,
    'สถานะผ่อนชำระ (EN)': installment.statusEN,
    เครื่องมือ: (
      <div className="flex justify-center items-center space-x-4">
        <button onClick={() => InsuranceView(installment._id)} className="text-black hover:text-gray-700">
          <AiOutlineEye className="w-5 h-5"/>
        </button>
        <button onClick={() => InsuranceUpdate(installment._id)} className="text-black hover:text-gray-700">
          <AiTwotoneEdit className="w-5 h-5"/>
        </button>
        <button onClick={() => openDeleteModal(installment._id)} className="text-black hover:text-gray-700">
          <AiOutlineDelete className="w-5 h-5"/>
        </button>
      </div>
    )
  }));
  console.log(formattedData);

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
        <div className="p-6">
          <div className="p-6 bg-white">
            <div className="flex w-full rounded-md mb-4 gap-3">
              <SearchInput
                placeholder="ค้นหาด้วย เลขที่เอกสาร, เลขที่กรมธรรม์, ชื่อ-สกุลตัวแทน, ชื่อ-สกุลลูกค้า, ทะเบียนรถ, รหัสตัวแทน"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button onClick={InsuranceCreate} className="inline-flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' , whiteSpace: 'nowrap'}}>
                <AiOutlinePlus className="w-3.5 h-3.5 text-white" />
                <div className="ml-2" style={{ color: 'white' }}>สร้าง</div>
              </button>
            </div>
            <div className="flex border-b gap-8 mb-2">
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  link={tab.link}
                />
              ))}
            </div>
            {loading ? (
              <div className="text-center py-6">Loading...</div> 
            ) : (
              <TableWithPagination
                columns={columns}
                data={formattedData}
                currentPage={currentPage}
                pageSize={pageSize}
                handlePageChange={handlePageChange}
                handlePageSizeChange={handlePageSizeChange}
              />
            )}
            <Popup
              isOpen={modalIsOpen}
              onRequestClose={closeDeleteModal}
              title={
                <>คุณต้องการ <span style={{ fontWeight: 'bold' }}>ลบรายละเอียดผ่อนชำระ</span> ใช่หรือไม่?</>
              }
              confirmLabel="ลบรายละเอียด"
              cancelLabel="ยกเลิก"
              onConfirm={handleDeleteConfirm}
              icon={<AiOutlineCloseCircle  style={{ color: '#FF4D4F' }} />}
              confirmButtonStyle={{
                backgroundColor: '#FF4D4F',
                color: 'white'
              }}
            />
          </div>
        </div>
      </div>
    </div>

    
  )

  
}
export default Insurance;

