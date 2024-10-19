import React, { useState } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import DateTimePicker from '../Assets/DateTimePicker';
import ProvinceDropdown from '../Assets/ProvinceDropdown';
import Dropdown from '../Assets/Dropdown';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineSave  } from 'react-icons/ai';
// import API_BASE_URL from '../../config';


const Insurance = ({ mode }) => {
    // const api = API_BASE_URL;
    const navigate = useNavigate();
    const disable = mode === "view" ? true : false;
    // const [date, setDate] = useState(null);

    const handleDateChange = (isoDate) => {
        console.log('Date sent to backend', isoDate);
        // setDate(isoDate); 
    };

    const [insurance, setInsurance] = useState({
        insurance_insuretype: '',
        insurance_installmentpayment: ''
      });

    const [selectedInsureType, setSelectedInsureType] = useState('');
    const handleInsureTypeChange = (e) => {
        setSelectedInsureType(e.target.value);
        setInsurance({ ...insurance , insurance_insuretype: e.target.value });
    };
    const insuretypes = ['1', '2', '3', '2+.', '3+'];

    const [selectedInstallmentPayment, setInstallmentPayment] = useState('');
    const handleInstallmentPaymentChange = (e) => {
        setInstallmentPayment(e.target.value);
        setInsurance({ ...insurance , insurance_installmentpayment: e.target.value });
    };
    const installmentpayments = ['3', '6'];

       
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
            <div className="flex-1 flex flex-col max-w p-6 m-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-4">
                    กรมธรรม์ประกันภัยรถยนต์
                </h2>
                <form >
                    <div className="flex flex-col gap-6 mb-6">
                        <div className="font-semibold p-2 bg-[#006F68] bg-opacity-20">เอกสารผ่อนชำระ</div>
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">เลขที่เอกสาร</label>
                                <input
                                    type="text"
                                    value={insurance.insurance_fname}
                                    onChange={e => {
                                    const value = e.target.value;
                                    if (/^[ก-๙\s]*$/.test(value)) {
                                        setInsurance({ ...insurance, insurance_fname: value });
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
                                <label className="block text-sm font-medium text-gray-700">สถานะชำระเบี้ยฯ</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_lname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_lname: value });
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
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">เลขที่กรมธรรม์</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_fname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_fname: value });
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
                                <label className="block text-sm font-medium text-gray-700">สถานะกรมธรรม์</label>
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
                        <div className="flex row gap-4">
                            <div className="flex-1 ">
                                <label className="block text-sm font-medium text-gray-700">วันที่สร้างขอผ่อนชำระ</label>
                                <div style={{ paddingTop: '4px' }}>
                                    <DateTimePicker 
                                        showTime={true} 
                                        onDateChange={handleDateChange}
                                        disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">วันที่ยืนยันขอผ่อนชำระ</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_lname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_lname: value });
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
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">ลูกค้า (ผู้ยืนยันผ่อนชำระ)</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_fname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_fname: value });
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
                                <label className="block text-sm font-medium text-gray-700">เชื่อมต่อ LINE</label>
                                <input
                                    type="text"
                                        value={insurance.insurance_lname}
                                        onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_lname: value });
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
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">วันที่ยกเลิก</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_fname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_fname: value });
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
                                <label className="block text-sm font-medium text-gray-700">เหตุผลที่ยกเลิก</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_lname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_lname: value });
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
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">วันที่ถูกปฏิเสธ</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_fname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_fname: value });
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
                                <label className="block text-sm font-medium text-gray-700">เหตุผลที่ถูกปฏิเสธ</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_lname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_lname: value });
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
                    </div>
                    <div>
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="font-semibold p-2 bg-[#006F68] bg-opacity-20">ผู้เอาประกันภัย</div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">ผู้เอาประกันภัย</label>
                                <input
                                    type="text"
                                      value={insurance.insurance_fname}
                                      onChange={e => {
                                        const value = e.target.value;
                                        if (/^[ก-๙\s]*$/.test(value)) {
                                            setInsurance({ ...insurance, insurance_fname: value });
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
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เบอร์มือถือ</label>
                                    <input
                                        type="text"
                                        value={insurance.insurance_phone}
                                        onChange={e => {
                                        let value = e.target.value.replace(/\D/g, ''); 
                                        if (value.length > 3 && value.length <= 6) {
                                            value = `${value.slice(0, 3)}-${value.slice(3)}`;
                                        } else if (value.length > 6) {
                                            value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
                                        }
                                        setInsurance({ ...insurance, insurance_phone: value });
                                        }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        inputMode="numeric"
                                        required
                                        disabled={disable}
                                        style={{
                                            cursor: disable ? 'not-allowed' : 'text',
                                            backgroundColor: disable ? '#f9fafb' : 'white',
                                        }}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">บัตรประชาชน</label>
                                    <input
                                        type="text"
                                        value={insurance.insurance_idCard}
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
                                            setInsurance({ ...insurance, insurance_idCard: value });
                                        }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        inputMode="numeric"
                                        maxLength="17" 
                                        required
                                        disabled={disable}     
                                        style={{
                                            cursor: disable ? 'not-allowed' : 'text',
                                            backgroundColor: disable ? '#f9fafb' : 'white',
                                        }}               
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="font-semibold p-2 bg-[#006F68] bg-opacity-20">รถยนต์คันเอาประกันภัย</div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ยี่ห้อ</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_brandname}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_brandname: value });
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
                                    <label className="block text-sm font-medium text-gray-700">รุ่น</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_modelname}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_modelname: value });
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
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ทะเบียนรถ</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_license}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_license: value });
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
                                    <label className="block text-sm font-medium text-gray-700">จังหวัด</label>
                                    <ProvinceDropdown 
                                    mode={mode}/>
                                </div>
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เลขตัวถัง </label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_chassis}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_chassis: value });
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
                                    <div>
                                        <Dropdown 
                                        label="ประเภทกรมธรรม์" 
                                        placeholder="เลือก" 
                                        value={selectedInsureType} 
                                        onChange={handleInsureTypeChange}
                                        options={insuretypes}
                                        mode={mode} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ทุนเอาประกันภัย (บาท)</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_fname}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_fname: value });
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
                                    <label className="block text-sm font-medium text-gray-700">เบี้ยประกันภัย (บาท)</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_lname}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_lname: value });
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
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <div>
                                        <Dropdown 
                                        label="ประสงค์ผ่อนชำระ (งวด)" 
                                        placeholder="เลือก" 
                                        value={selectedInstallmentPayment} 
                                        onChange={handleInstallmentPaymentChange}
                                        options={installmentpayments}
                                        mode={mode}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ผ่อนชำระ งวดละ</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_lname}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_lname: value });
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
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-6 mb-12">
                            <div className="font-semibold p-2 bg-[#006F68] bg-opacity-20">ข้อมูลตัวแทน</div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">รหัสตัวแทน</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_fname}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_fname: value });
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
                                    <label className="block text-sm font-medium text-gray-700">นาย สมหมาย บุญมี</label>
                                </div>
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เบอร์ติดต่อ</label>
                                    <input
                                        type="text"
                                        value={insurance.insurance_phone}
                                        onChange={e => {
                                        let value = e.target.value.replace(/\D/g, ''); 
                                        if (value.length > 3 && value.length <= 6) {
                                            value = `${value.slice(0, 3)}-${value.slice(3)}`;
                                        } else if (value.length > 6) {
                                            value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
                                        }
                                        setInsurance({ ...insurance, insurance_phone: value });
                                        }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        inputMode="numeric"
                                        required
                                        disabled={disable}
                                        style={{
                                            cursor: disable ? 'not-allowed' : 'text',
                                            backgroundColor: disable ? '#f9fafb' : 'white',
                                        }}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เลขที่ใบอนุญาต</label>
                                    <input
                                        type="text"
                                          value={insurance.insurance_lname}
                                          onChange={e => {
                                            const value = e.target.value;
                                            if (/^[ก-๙\s]*$/.test(value)) {
                                                setInsurance({ ...insurance, insurance_lname: value });
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
                        </div>
                    </div>
                    {mode !== 'view' && (
                        <div className="flex row gap-2">
                            <button
                                onClick={() => navigate('/insurance')}
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
                                    สร้างข้อมูลกรมธรรม์
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
                            onClick={() => navigate('/insurance')}
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

export default Insurance;
