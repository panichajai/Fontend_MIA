import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineSave, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import API_BASE_URL from '../../config';
import Popup from '../Assets/Popup';



const CarBrandSetting = ({ mode }) => {
    const { id } = useParams();
    const api = API_BASE_URL;
    const navigate = useNavigate();
    const disable = mode === "view" ? true : false;
    const [errorMessage, setErrorMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const [carbrand, setCarBrand] = useState({
        brandEN: '',
        modelEN: ''
    });

    useEffect(() => {
        if (mode === 'update' || mode === 'view') {
          if (!id) {
            setErrorMessage('Invalid carbrand ID');
            return;
          }
    
          const requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
    
          fetch(`${api}carbrand/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result);
                if (result.status === 200 && result.success) {
                  setCarBrand(result.data);
                } else {
                  setErrorMessage(result.message || 'Failed to fetch carbrand data');
                }
              })
              .catch(error => {
                console.error('Fetch error:', error);
                setErrorMessage('Error fetching carbrand data');
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

        const raw = JSON.stringify(carbrand);
        
        const requestOptions = {
          method: mode === 'create' ? 'POST' : 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };
        const apiUrl = mode === 'create' ? api + 'carbrand' : api+`carbrand/${id}`;
    
        fetch(apiUrl, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status === 200 && result.success) {
              navigate('/carbrand');
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
              onClick={() => navigate('/carbrand')}
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
                    <Nav pageName="ยี่ห้อรถ Settings" />
                    <div className="mt-4 text-4xl ">ยี่ห้อรถ Settings</div>        
                </div>
                <div className="flex-1 flex flex-col max-w p-6 m-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">
                        สร้างรายละเอียดยี่ห้อรถ
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6 mb-12 rounded-md">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Brand (EN)</label>
                                <input
                                    type="text"
                                    value={carbrand.brandEN}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                        setCarBrand({ ...carbrand, brandEN: value });
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
                                <label className="block text-sm font-medium text-gray-700">Model (EN)</label>
                                <input
                                    type="text"
                                    value={carbrand.modelEN}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                        setCarBrand({ ...carbrand, modelEN: value });
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
                                    onClick={() => navigate('/carbrand')}
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
                                        สร้างรายละเอียดยี่ห้อรถ
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
                                onClick={() => navigate('/carbrand')}
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
                                {mode === 'create' ? 'สร้างรายละเอียดยี่ห้อรถ' : 'บันทึกการแก้ไข'}
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
                    </form>
                </div>
        </div>
    </div>
    
  )
}

export default CarBrandSetting;
