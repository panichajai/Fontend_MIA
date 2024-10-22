import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineSave, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import API_BASE_URL from '../../config';
import Popup from '../Assets/Popup';


const StatusInsurance = ({ mode }) => {
    const { id } = useParams();
    const api = API_BASE_URL;
    const navigate = useNavigate();
    const disable = mode === "view" ? true : false;
    const [errorMessage, setErrorMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const [statusinsurance, setStatusInsurance] = useState({
        statusTH: '',
        statusEN: '',
        code: ''
    });

    useEffect(() => {
        if (mode === 'update' || mode === 'view') {
          if (!id) {
            setErrorMessage('not find statusinsurance id');
            return;
          }
    
          const requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
    
          fetch(`${api}setting/statusinsurance/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status === 200 && result.success) {
                setStatusInsurance(result.data);
              } 
              else {
                setErrorMessage(result.message || 'Failed to fetch statusinsurance data');
              }
            })
            .catch(error => {
              console.error('Fetch error:', error);
              setErrorMessage('Error fetching statusinsurance data');
            });
        }
      }, [id, mode, api]);

      const handleSubmit = (e) => {
        e.preventDefault(); 
        openModal(); 
      };

      const handleConfirm = () => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify(statusinsurance);
        
        const requestOptions = {
          method: mode === 'create' ? 'POST' : 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };
        const apiUrl = mode === 'create' ? api + 'setting/statusinsurance' : api+`setting/statusinsurance/${id}`;
        fetch(apiUrl, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status === 200 && result.success) {
              navigate('/statusinsurance');
            } else {
              alert(result.message);
            }
          })
          .catch(error => console.error('Error:', error));
    
        closeModal();
      };
    
      if (errorMessage) {
        return (
          <div className="max-w p-6 m-6 bg-white shadow-md rounded-md">
            <p>{errorMessage}</p>
            <button
              onClick={() => navigate('/statusinsurance')}
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
                    <Nav pageName="สถานะกรมธรรม์ Setting" />
                    <div className="mt-4 text-4xl ">สถานะกรมธรรม์ Setting</div>        
                </div>
                <div className="flex-1 flex flex-col max-w p-6 m-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">
                    สถานะกรมธรรม์ Setting
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">ชื่อสถานะ (TH)</label>
                                <input
                                    type="text"
                                    value={statusinsurance.statusTH}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙a-zA-Z0-9\s]*$/.test(value)) {
                                        setStatusInsurance({ ...statusinsurance, statusTH: value });
                                      }
                                    }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    disabled={disable}
                                    style={{
                                        cursor: disable ? 'not-allowed' : 'text',
                                        backgroundColor: disable ? '#f9fafb' : 'white',
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">ชื่อสถานะ (EN)</label>
                                <input
                                    type="text"
                                    value={statusinsurance.statusEN}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙a-zA-Z0-9\s]*$/.test(value)) {
                                        setStatusInsurance({ ...statusinsurance, statusEN: value });
                                      }
                                    }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    disabled={disable}
                                    style={{
                                        cursor: disable ? 'not-allowed' : 'text',
                                        backgroundColor: disable ? '#f9fafb' : 'white',
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Code</label>
                                <input
                                    type="text"
                                    value={statusinsurance.code}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙a-zA-Z0-9\s]*$/.test(value)) {
                                        setStatusInsurance({ ...statusinsurance, code: value });
                                      }
                                    }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    disabled={disable}
                                    style={{
                                        cursor: disable ? 'not-allowed' : 'text',
                                        backgroundColor: disable ? '#f9fafb' : 'white',
                                    }}
                                />
                            </div>    
                        </div>
                        {mode !== 'view' && (
                            <div className="flex row gap-2">
                                <button
                                    onClick={() => navigate('/statusinsurance')}
                                    className="w-full border-2 text-black py-2 px-4 rounded-md">
                                    ยกเลิก
                                </button>
                                <button
                                    onClick={openModal}
                                    className="w-full text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    style={{ backgroundColor: '#006F68'}} 
                                    >
                                    {mode === 'create' ? (
                                    <>
                                        <AiOutlinePlus  className="inline-block mr-1" />
                                        สร้างสถานะกรมธรรม์
                                    </>
                                    ) : (
                                    <>
                                        <AiOutlineSave className="inline-block mr-1" />
                                        บันทึกการแก้ไข
                                    </>
                                    )}
                                </button>
                            </div>
                        )}
                        {mode === 'view' && (
                            <button
                                onClick={() => navigate('/statusinsurance')}
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
                                {mode === 'create' ? 'สร้างรายละเอียดสถานะกรมธรรม์' : 'แก้ไขรายละเอียดสถานะกรมธรรม์'}
                                </span> ใช่หรือไม่?
                            </>
                            }
                            confirmLabel={mode === 'create' ? 'ยืนยันการสร้าง' : 'ยืนยันการแก้ไข'}
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
                    </form>
                </div>
        </div>
    </div>
    
  )
}

export default StatusInsurance;
