import React, { useState } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import DateTimePicker from '../Assets/DateTimePicker';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight  } from 'react-icons/ai';

const Insurance = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(null);

    const handleDateChange = (isoDate) => {
        console.log('Date sent to backend (ISO):', isoDate);
        setDate(isoDate); 
    };

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
                                    //   value={customer.customer_fname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_fname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">สถานะชำระเบี้ยฯ</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_lname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_lname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                        </div>
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">เลขที่กรมธรรม์</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_fname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_fname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">สถานะกรมธรรม์</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_lname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_lname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                        </div>
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">วันที่สร้างขอผ่อนชำระ</label>
                                <DateTimePicker showTime={true} onDateChange={handleDateChange} />
                                {date && <p>ข้อมูลที่ส่งไปยัง MongoDB: {date}</p>}
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">วันที่ยืนยันขอผ่อนชำระ</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_lname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_lname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                        </div>
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">ลูกค้า (ผู้ยืนยันผ่อนชำระ)</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_fname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_fname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">เชื่อมต่อ LINE</label>
                                {/* <input
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
                                /> */}
                            </div>
                        </div>   
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">วันที่ยกเลิก</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_fname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_fname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">เหตุผลที่ยกเลิก</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_lname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_lname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                        </div>   
                        <div className="flex row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">วันที่ถูกปฏิเสธ</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_fname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_fname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">เหตุผลที่ถูกปฏิเสธ</label>
                                <input
                                    type="text"
                                    //   value={customer.customer_lname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_lname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
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
                                    //   value={customer.customer_fname}
                                    //   onChange={e => {
                                    //     const value = e.target.value;
                                    //     if (/^[ก-๙\s]*$/.test(value)) {
                                    //       setCustomer({ ...customer, customer_fname: value });
                                    //     }
                                    //   }}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                    //   disabled={disable}
                                />
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เบอร์มือถือ</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">บัตรประชาชน</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_lname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_lname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
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
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">รุ่น</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_lname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_lname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ทะเบียนรถ</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">จังหวัด</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_lname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_lname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เลขตัวถัง </label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ประเภทกรมธรรม์</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_lname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_lname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ทุนเอาประกันภัย (บาท)</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เบี้ยประกันภัย (บาท)</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_lname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_lname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ประสงค์ผ่อนชำระ (งวด)</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ผ่อนชำระ งวดละ</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_lname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_lname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="font-semibold p-2 bg-[#006F68] bg-opacity-20">ข้อมูลตัวแทน</div>
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">รหัสตัวแทน</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
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
                                        //   value={customer.customer_fname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_fname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">เลขที่ใบอนุญาต</label>
                                    <input
                                        type="text"
                                        //   value={customer.customer_lname}
                                        //   onChange={e => {
                                        //     const value = e.target.value;
                                        //     if (/^[ก-๙\s]*$/.test(value)) {
                                        //       setCustomer({ ...customer, customer_lname: value });
                                        //     }
                                        //   }}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                        required
                                        //   disabled={disable}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <AiOutlineArrowRight  className="inline-block mr-1" />
                            ถัดไป
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Insurance;
