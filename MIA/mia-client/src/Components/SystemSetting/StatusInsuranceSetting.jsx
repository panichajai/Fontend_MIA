import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineSave  } from 'react-icons/ai';
import API_BASE_URL from '../../config';


const StatusInsuranceSetting = ({ mode }) => {
    const { id } = useParams();
    const api = API_BASE_URL;
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const disable = mode === "view" ? true : false;

    const [statusinsurancesetting, setStatusInsuranceSetting] = useState({
        statusinsurancesetting_NameStatusTH: '',
        statusinsurancesetting_NameStatusEN: '',
        statusinsurancesetting_code: '',
    });

    useEffect(() => {
        if (mode === 'update' || mode === 'view') {
          if (!id) {
            setErrorMessage('');
            return;
          }
    
          const requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
    
          fetch(`${api}statusinsurancesetting/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status === 200 && result.success) {
              } 
              else {
                setErrorMessage(result.message || 'Failed to fetch data');
              }
            })
            .catch(error => {
              console.error('Fetch error:', error);
              setErrorMessage('Error fetching data');
            });
        }
      }, [id, mode, api]);

      const handleSubmit = () => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
    
        const requestOptions = {
          method: mode === 'create' ? 'POST' : 'PUT',
          headers: myHeaders,
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
                                    value={statusinsurancesetting.statusinsurancesetting_NameStatusTH}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                        setStatusInsuranceSetting({ ...statusinsurancesetting, statusinsurancesetting_NameStatusTH: value });
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
                                    value={statusinsurancesetting.statusinsurancesetting_NameStatusEN}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                        setStatusInsuranceSetting({ ...statusinsurancesetting, statusinsurancesetting_NameStatusEN: value });
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
                                    value={statusinsurancesetting.statusinsurancesetting_code}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                        setStatusInsuranceSetting({ ...statusinsurancesetting, statusinsurancesetting_code: value });
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
                                    onClick={() => navigate('/statusinsurancesetting')}
                                    className="w-full border-2 text-black py-2 px-4 rounded-md">
                                    ยกเลิก
                                </button>
                                <button
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
                                onClick={() => navigate('/statusinsurancesetting')}
                                className="w-full border-2 text-black py-2 px-4 rounded-md">
                                ย้อนกลับ
                            </button>
                        )}
                    </form>
                </div>
        </div>
    </div>
    
  )
}

export default StatusInsuranceSetting;
