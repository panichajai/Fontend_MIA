import React, { useState } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineSave  } from 'react-icons/ai';

const CarBrandSetting = ({ mode }) => {
    const navigate = useNavigate();
    const disable = mode === "view" ? true : false;

    const [insurance, setInsurance] = useState({
        insurance_insuretype: '',
        insurance_installmentpayment: ''
    });

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
                    <form >
                        <div className="flex flex-col gap-6 mb-12 rounded-md">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Brand (EN)</label>
                                <input
                                    type="text"
                                    value={insurance.insurance_policystatus}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                          setInsurance({ ...insurance, insurance_policystatus: value });
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
                                    value={insurance.insurance_policystatus}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                          setInsurance({ ...insurance, insurance_policystatus: value });
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
                                    onClick={() => navigate('/carbrandsetting')}
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
                                onClick={() => navigate('/carbrandsetting')}
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

export default CarBrandSetting;
