import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import Popup from '../Assets/Popup';
import Dropdown from '../Assets/Dropdown';
import Tab from '../Assets/Tab';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css'; 
import moment from 'moment'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import { AiOutlinePlus, AiOutlineSave, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import API_BASE_URL from '../../config';


const Customer = ({ mode }) => {
  const { id } = useParams();
  const api = API_BASE_URL;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const tabs = [
    { id: 'tab1', label: 'ข้อมูลส่วนตัว', link: ' ' },
    { id: 'tab2', label: 'กรมธรรม์', link: ' ' },
  ];

  const [customer, setCustomer] = useState({
    customer_title: '',
    customer_fname: '',
    customer_lname: '',
    customer_phone: '',
    customer_dateOfBirth: '',
    customer_gender: '',
    customer_idCard: '',
    customer_issuedDate: '',
    customer_expireDate: ''
  });

  const disable = mode === "view" ? true : false;
  const [errorMessage, setErrorMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [selectedTitle, setSelectedTitle] = useState('');
  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
    setCustomer({ ...customer, customer_title: e.target.value });
  };
  const titles = ['นาย', 'นาง', 'นางสาว', 'ดร.', 'ศ.ดร.'];

  useEffect(() => {
    if (mode === 'update' || mode === 'view') {
      if (!id) {
        setErrorMessage('Invalid customer ID');
        return;
      }

      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(`${api}customers/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status === 200 && result.success) {
            const customerData = result.data;

            setCustomer({
              ...customerData,
              customer_dateOfBirth: customerData.customer_dateOfBirth
                ? convertCEToThai(moment(customerData.customer_dateOfBirth).format('DD/MM/YYYY')) 
                : '',
              customer_issuedDate: customerData.customer_issuedDate
                ? convertCEToThai(moment(customerData.customer_issuedDate).format('DD/MM/YYYY')) 
                : '',
              customer_expireDate: customerData.customer_expireDate
                ? convertCEToThai(moment(customerData.customer_expireDate).format('DD/MM/YYYY')) 
                : ''
            });
            setSelectedTitle(customerData.customer_title);
          } else {
            setErrorMessage(result.message || 'Failed to fetch customer data');
          }
        })
        .catch(error => {
          console.error('Fetch error:', error);
          setErrorMessage('Error fetching customer data');
        });
    }
  }, [id, mode, api]);

  const handleDateOfBirthChange = (date, dateString) => {
    const thaiDate = dateString ? convertCEToThai(dateString) : ''; 
    setCustomer({
      ...customer,
      customer_dateOfBirth: thaiDate 
    });
  };

  const handleIssuedDateChange = (date, dateString) => {
    setCustomer({
      ...customer,
      customer_issuedDate: dateString 
    });
  };

  const handleExpireDateChange = (date, dateString) => {
    setCustomer({
      ...customer,
      customer_expireDate: dateString 
    });
  };

  const convertCEToThai = (dateString) => {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1];
      const year = parseInt(parts[2], 10) + 543; 
      return `${day}/${month}/${year}`;
    }
    return null;
  };

  const convertThaiToCE = dateString => {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1];
      const year = parseInt(parts[2], 10) - 543; 
      return `${year}-${month}-${day}`;
    }
    return null;
  };

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      ...customer,
      customer_dateOfBirth: convertThaiToCE(customer.customer_dateOfBirth),
      customer_issuedDate: convertThaiToCE(customer.customer_issuedDate),
      customer_expireDate: convertThaiToCE(customer.customer_expireDate),
    });

    const requestOptions = {
      method: mode === 'create' ? 'POST' : 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    const apiUrl = mode === 'create' ? api + 'customers' : api+`customers/${id}`;

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 200 && result.success) {
          navigate('/customer');
        } else {
          alert(result.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleConfirm = () => {
    handleSubmit();
    closeModal();
  };

  if (errorMessage) {
    return (
      <div className="max-w p-6 m-6 bg-white shadow-md rounded-md">
        <p>{errorMessage}</p>
        <button
          onClick={() => navigate('/customer')}
          className="w-full border-2 text-black py-2 px-4 rounded-md">
          ย้อนกลับ
        </button>
      </div>
    );
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
              <div className="flex border-b gap-8 mb-2 mt-4">
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
            </div>
        <div className="flex-1 flex flex-col">
          <div className="max-w p-6 m-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">
              {mode === 'view' ? 'ข้อมูลลูกค้า' : mode === 'create' ? 'สร้างข้อมูลลูกค้า' : 'แก้ไขข้อมูลลูกค้า'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 mb-12">
                <div>
                  <div>
                    <Dropdown 
                      label="คำนำหน้า" 
                      placeholder="คำนำหน้า" 
                      value={selectedTitle} 
                      onChange={handleTitleChange}
                      options={titles}
                      disabled={mode === 'view'}
                    />
                  </div>
                </div>
                <div className="flex row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">ชื่อ (ภาษาไทย)</label>
                    <input
                      type="text"
                      value={customer.customer_fname}
                      onChange={e => {
                        const value = e.target.value;
                        if (/^[ก-๙\s]*$/.test(value)) {
                          setCustomer({ ...customer, customer_fname: value });
                        }
                      }}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
                      disabled={disable}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">นามสกุล (ภาษาไทย)</label>
                    <input
                      type="text"
                      value={customer.customer_lname}
                      onChange={e => {
                        const value = e.target.value;
                        if (/^[ก-๙\s]*$/.test(value)) {
                          setCustomer({ ...customer, customer_lname: value });
                        }
                      }}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
                      disabled={disable}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">เบอร์มือถือ</label>
                  <input
                    type="text"
                    value={customer.customer_phone}
                    onChange={e => {
                      let value = e.target.value.replace(/\D/g, ''); 
                      if (value.length > 3 && value.length <= 6) {
                        value = `${value.slice(0, 3)}-${value.slice(3)}`;
                      } else if (value.length > 6) {
                        value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
                      }
                      setCustomer({ ...customer, customer_phone: value });
                    }}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    inputMode="numeric"
                    required
                    disabled={disable}
                  />
                </div>
                <div className="flex row gap-4">
                  <div className="flex-1 flex-col">
                    <label>วันเกิด</label>
                    <div className="flex row">
                      <DatePicker
                        value={customer.customer_dateOfBirth ? moment(customer.customer_dateOfBirth, 'DD/MM/YYYY') : null}
                        onChange={handleDateOfBirthChange}
                        format="DD/MM/YYYY"
                        placeholder="เลือกวันที่"
                        disabled={disable}
                        inputReadOnly={!disable}
                        style={{ width: '100%' }}
                      />
                      <Popup modalIsOpen={modalIsOpen} closeModal={closeModal} confirmAction={handleConfirm} />
                    </div>
                  </div>
                  <div className="flex-1 flex-col"> 
                    <label>เพศ</label> 
                    <div className="flex row gap-2">
                      <div className="flex row gap-2 ">
                        <label className="block text-sm font-medium text-gray-700">ชาย</label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={customer.customer_gender === 'male'}
                          onChange={e => setCustomer({ ...customer, customer_gender: e.target.value })}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          required
                          disabled={disable}
                        />
                        <span classname="ml-2"></span>
                      </div>
                      <div className="flex row gap-2 ">
                        <label className="block text-sm font-medium text-gray-700">หญิง</label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={customer.customer_gender === 'female'}
                          onChange={e => setCustomer({ ...customer, customer_gender: e.target.value })}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          required
                          disabled={disable}
                        />
                        <span classname="ml-2"></span>
                      </div>
                    </div>
                  </div>
                </div>    
                <div>
                  <label className="block text-sm font-medium text-gray-700">หมายเลขบัตรประชาชน</label>
                  {mode === 'create'  ? (
                    <input
                      type="text"
                      value={customer.customer_idCard}
                      onChange={e => {
                        let value = e.target.value.replace(/\D/g, ''); 
                        if (value.length > 1 && value.length <= 5) {
                          value = `${value.slice(0, 1)}-${value.slice(1)}`;
                        } else if (value.length > 5 && value.length <= 10) {
                          value = `${value.slice(0, 1)}-${value.slice(1, 5)}-${value.slice(5)}`;
                        } else if (value.length > 10 && value.length <= 12) {
                          value = `${value.slice(0, 1)}-${value.slice(1, 5)}-${value.slice(5, 10)}-${value.slice(10)}`;
                        } else if (value.length > 12) {
                          value = `${value.slice(0, 1)}-${value.slice(1, 5)}-${value.slice(5, 10)}-${value.slice(10, 12)}-${value.slice(12)}`;
                        }
                        setCustomer({ ...customer, customer_idCard: value });
                      }}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      inputMode="numeric"
                      maxLength="17" 
                      required                    
                    />
                  ) : (
                    <input
                      type="text"
                      value={customer.customer_idCard}
                      onChange={e => {
                        let value = e.target.value.replace(/\D/g, ''); 
                        if (value.length > 1 && value.length <= 5) {
                          value = `${value.slice(0, 1)}-${value.slice(1)}`;
                        } else if (value.length > 5 && value.length <= 10) {
                          value = `${value.slice(0, 1)}-${value.slice(1, 5)}-${value.slice(5)}`;
                        } else if (value.length > 10 && value.length <= 12) {
                          value = `${value.slice(0, 1)}-${value.slice(1, 5)}-${value.slice(5, 10)}-${value.slice(10)}`;
                        } else if (value.length > 12) {
                          value = `${value.slice(0, 1)}-${value.slice(1, 5)}-${value.slice(5, 10)}-${value.slice(10, 12)}-${value.slice(12)}`;
                        }
                        setCustomer({ ...customer, customer_idCard: value });
                      }}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      inputMode="numeric"
                      maxLength="17" 
                      required   
                      disabled={mode === 'update' || 'view'} 
                    />
                  )}
                </div>
                <div className="flex row gap-4">
                  <div className="flex-1">
                  <label>วันที่ออกบัตร</label>
                    <div className="flex row">
                      <DatePicker
                        value={customer.customer_issuedDate ? moment(customer.customer_issuedDate, 'DD/MM/YYYY') : null}
                        onChange={handleIssuedDateChange}
                        format="DD/MM/YYYY"
                        placeholder="เลือกวันที่"
                        disabled={disable}
                        inputReadOnly={!disable}
                        style={{ width: '100%' }}
                      />
                      <Popup modalIsOpen={modalIsOpen} closeModal={closeModal} confirmAction={handleConfirm} />
                    </div>
                  </div>
                  <div className="flex-1">
                  <label>วันหมดอายุ</label>
                    <div className="flex row">
                      <DatePicker
                        value={customer.customer_expireDate ? moment(customer.customer_expireDate, 'DD/MM/YYYY') : null}
                        onChange={handleExpireDateChange}
                        format="DD/MM/YYYY"
                        placeholder="เลือกวันที่"
                        disabled={disable}
                        inputReadOnly={!disable}
                        style={{ width: '100%' }}
                      />
                      <Popup modalIsOpen={modalIsOpen} closeModal={closeModal} confirmAction={handleConfirm} />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {mode !== 'view' && (
              <div className="flex row gap-2">
                <button
                  onClick={() => navigate('/customer')}
                  className="w-full border-2 text-black py-2 px-4 rounded-md">
                  ย้อนกลับ
                </button>

                <button
                  onClick={openModal}
                  className="w-full text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ backgroundColor: '#006F68'}} 
                  >
                  {mode === 'create' ? (
                    <>
                      <AiOutlinePlus className="inline-block mr-1" />
                      สร้างข้อมูลลูกค้า
                    </>
                    ) : (
                    <>
                      <AiOutlineSave className="inline-block mr-1" />
                      ยืนยันการแก้ไข
                    </>
                  )}
                </button>
              </div>
            )}
            {mode === 'view' && (
              <button
                onClick={() => navigate('/customer')}
                className="w-full border-2 text-black py-2 px-4 rounded-md">
                ย้อนกลับ
              </button>
            )}
            <Popup
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              title={
                <>
                  คุณต้องการ <span 
                    style={{ fontWeight: 'bold' 
                    }}>
                    {mode === 'create' ? 'สร้างข้อมูลลูกค้า' : 'บันทึกการแก้ไข'}
                  </span> ใช่หรือไม่?
                </>
              }
              confirmLabel={mode === 'create' ? 'สร้างข้อมูลลูกค้า' : 'บันทึกการแก้ไข'}
              cancelLabel="ยกเลิก"
              onConfirm={handleConfirm}
              icon={mode === 'create' ? 
              <AiOutlineCheckCircle style={{ color: '#006F68' }} /> 
              : 
              <AiOutlineWarning style={{ color: '#FFCC00' }} />}
              confirmButtonStyle={{
                backgroundColor: mode === 'create' ? '#006F68' : '#FAAD14', 
                color: 'white'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
