import { useState, useEffect, useCallback }  from 'react'
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus, AiOutlineCloseCircle  } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';
import API_BASE_URL from '../../config';
import TableWithPagination from '../Assets/TableWithPagination';
import Popup from '../Assets/Popup';



const CarBrandList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [selectedCarBrandId, setSelectedCarBrandId] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const api = API_BASE_URL;
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setCurrentPage(1); 
  };


  const CarBrandCreate = () => {
    navigate(`/carbrand/create`); 
  }

  const CarBrandUpdate = id => {
    navigate(`/carbrand/update/${id}`); 
  }

  const CarBrandView = id => {
    console.log('not found id page carbramdlist :' , id)
    navigate(`/carbrand/view/${id}`); 
  }


  const UserGet = useCallback(() => {
    setLoading(true);
    fetch(api + "setting/carbrand")
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
      const filtered = items.filter(carbrand =>
        carbrand.brandEN.toLowerCase().includes(value) ||
        carbrand.modelEN.toLowerCase().includes(value) 
      );
      
      console.log('Filtered Items:', filtered); 
      setFilteredItems(filtered);
    } else {
      console.log("No items to filter");
    }
  };

  const openDeleteModal = id => {
    setSelectedCarBrandId(id);
    setModalIsOpen(true);
  }

  const closeDeleteModal = () => {
    setModalIsOpen(false);
    setSelectedCarBrandId(null);
  }

  const handleDeleteConfirm = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(api+`setting/carbrand/${selectedCarBrandId}`, requestOptions) 
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

  const columns = ['Brand (EN)', 'Model (EN)', 'เครื่องมือ']; 

  const formattedData = filteredItems.map((carbrand) => ({
    'Brand (EN)': carbrand.brandEN,
    'Model (EN)': carbrand.modelEN,
    เครื่องมือ: (
      <div className="flex justify-center items-center space-x-4">
        <button onClick={() => CarBrandView(carbrand._id)} className="text-black hover:text-gray-700">
          <AiOutlineEye className="w-5 h-5"/>
        </button>
        <button onClick={() => CarBrandUpdate(carbrand._id)} className="text-black hover:text-gray-700">
          <AiTwotoneEdit className="w-5 h-5"/>
        </button>
        <button onClick={() => openDeleteModal(carbrand._id)} className="text-black hover:text-gray-700">
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
            <button onClick={CarBrandCreate} className="inline-flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' , whiteSpace: 'nowrap'}}>
              <AiOutlinePlus className="w-3.5 h-3.5 text-white" />
              <div className="ml-2" style={{ color: 'white' }}>สร้าง</div>
            </button>
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
                <>คุณต้องการ <span style={{ fontWeight: 'bold' }}>ลบรายละเอียดยี่ห้อรถ</span> ใช่หรือไม่?</>
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

    
  )

  
}
export default CarBrandList;

