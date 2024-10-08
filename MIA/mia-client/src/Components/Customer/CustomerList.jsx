import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus, AiOutlineCloseCircle  } from "react-icons/ai";
import SearchInput from '../Assets/SearchInput';
import Popup from '../Assets/Popup';
import API_BASE_URL from '../../config';

const CustomerList = () => {
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [selectedCustomerId, setSelectedCustomerId] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const api = API_BASE_URL;

  const UserGet = useCallback(() => {
    setLoading(true);
    fetch(api + "customers")
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
  }, [UserGet]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value); 

    const filtered = items.filter(customer => 
      customer.customer_fname.toLowerCase().includes(value) ||
      customer.customer_lname.toLowerCase().includes(value) ||
      customer.customer_phone.includes(value) ||
      customer.customer_idCard.includes(value)
    );

    setFilteredItems(filtered); 
  }

  const CustomerUpdate = id => {
    navigate(`/customer/update/${id}`); 
  }

  const CustomerView = id => {
    navigate(`/customer/view/${id}`); 
  }

  const CustomerCreate = () => {
    navigate(`/customer/create`); 
  }

  const openDeleteModal = id => {
    setSelectedCustomerId(id);
    setModalIsOpen(true);
  }

  const closeDeleteModal = () => {
    setModalIsOpen(false);
    setSelectedCustomerId(null);
  }

  const handleDeleteConfirm = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(api+`customers/${selectedCustomerId}`, requestOptions) 
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

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
      <div className="w-[248px] bg-gray-100">
        <Menu />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="py-4 pl-6 bg-white">
          <Nav pageName="ลูกค้า" />
          <div className="mt-4 text-4xl ">ลูกค้า</div>        
        </div>
        <div className="px-6 ">
          <div className="flex w-full rounded-md my-4 gap-3">
            <SearchInput
              placeholder="ค้นหาด้วย ชื่อ, นามสกุล, เบอร์โทรศัพท์ หรือ บัตรประชาชน"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={CustomerCreate} className="flex justify-center items-center space-x-2 border border-gray-300 px-3.5 rounded-md" style={{ backgroundColor: '#006F68' }}>
              <AiOutlinePlus className="w-5 h-5 text-white" />
              <div className="ml-2 " style={{color:'white'}}>สร้าง</div> 
            </button>
          </div>

          {loading ? (
            <div className="text-center py-6">Loading...</div> 
          ) : (
            <table className="table-auto w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-center">ลำดับ</th>
                  <th className="px-4 py-2 text-center">ชื่อ-สกุล</th>
                  <th className="px-4 py-2 text-center">เบอร์โทรศัพท์</th>
                  <th className="px-4 py-2 text-center">บัตรประชาชน</th>
                  <th className="px-4 py-2 text-center">เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(filteredItems) && filteredItems.map((customer, index) => (
                  <tr key={customer._id} className="border-t"> 
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{customer.customer_fname} {customer.customer_lname}</td>
                    <td className="px-4 py-2 text-center">{customer.customer_phone}</td>
                    <td className="px-4 py-2 text-center">{customer.customer_idCard}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center items-center space-x-4">
                        <button onClick={() => CustomerView(customer._id)} className="text-black hover:text-gray-700">
                          <AiOutlineEye className="w-5 h-5"/>
                        </button>
                        <button onClick={() => CustomerUpdate(customer._id)} className="text-black hover:text-gray-700 ">
                          <AiTwotoneEdit className="w-5 h-5"/>
                        </button>
                        <button onClick={() => openDeleteModal(customer._id)} className="text-black hover:text-gray-700">
                          <AiOutlineDelete  className="w-5 h-5"/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <Popup
        isOpen={modalIsOpen}
        onRequestClose={closeDeleteModal}
        title={
          <>คุณต้องการ <span style={{ fontWeight: 'bold' }}>ลบข้อมูลลูกค้า</span> ใช่หรือไม่?</>
        }
        confirmLabel="ยืนยันการลบข้อมูล"
        cancelLabel="ยกเลิก"
        onConfirm={handleDeleteConfirm}
        icon={<AiOutlineCloseCircle  style={{ color: '#FF4D4F' }} />}
        confirmButtonStyle={{
          backgroundColor: '#FF4D4F',
          color: 'white'
        }}
      />
    </div>
  );
};

export default CustomerList;
