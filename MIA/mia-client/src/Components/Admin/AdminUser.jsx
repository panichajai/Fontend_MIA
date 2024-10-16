import React from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const AdminUser = () => {
    const navigate = useNavigate();

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
        <div className="w-[248px] bg-gray-100">
            <Menu />
        </div>
        <div className="flex-1 flex flex-col">
            <Header />
                <div className="py-4 pl-6 bg-white">
                    <Nav pageName="Admin User" />
                    <div className="mt-4 text-4xl ">Admin User</div>        
                </div>
                <div className="flex-1 flex flex-col max-w p-6 m-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">
                        รายละเอียด Admin User
                    </h2>
                    <form >
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
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
                                    <label className="block text-sm font-medium text-gray-700">นามสกุล</label>
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
                                    <label className="block text-sm font-medium text-gray-700">แผนก</label>
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
                                    <label className="block text-sm font-medium text-gray-700">ตำแหน่ง</label>
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
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">อีเมล</label>
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
                                <label className="block text-sm font-medium text-gray-700">บทบาท</label>
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
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">สถานะ</label>
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
                                <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
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
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">ยืนยันรหัสผ่าน</label>
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
                        </div>
                        <div className="flex row gap-2">
                            <button
                            onClick={() => navigate('/adminuser')}
                            className="w-full border-2 text-black py-2 px-4 rounded-md">
                            ยกเลิก
                            </button>
                            <button
                            className="w-full text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            style={{ backgroundColor: '#006F68'}} 
                            >
                                <AiOutlinePlus className="inline-block mr-1" />
                                เพิ่ม Admin User
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    
  )
}

export default AdminUser;
