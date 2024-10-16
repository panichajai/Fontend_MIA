import React from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete, AiOutlinePlus  } from "react-icons/ai";

const ProjectSetting = () => {
    const navigate = useNavigate();

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
        <div className="w-[248px] bg-gray-100">
            <Menu />
        </div>
        <div className="flex-1 flex flex-col">
            <Header />
                <div className="py-4 pl-6 bg-white">
                    <Nav pageName="เข้าร่วมโครงการ Setting" />
                    <div className="mt-4 text-4xl ">เข้าร่วมโครงการ Setting</div>        
                </div>
                <div className="flex-1 flex flex-col max-w p-6 m-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">
                        สร้างรายละเอียดเข้าร่วมโครงการ
                    </h2>
                    <form >
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Id</label>
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
                                <label className="block text-sm font-medium text-gray-700">หัวข้อโครงการ</label>
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
                                <label className="block text-sm font-medium text-gray-700">เวอร์ชัน</label>
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
                                <label className="block text-sm font-medium text-gray-700">รายละเอียดโครงการ</label>
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
                                <label className="block text-sm font-medium text-gray-700">หัวข้อเงื่อนไขการผ่อนชำระ</label>
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
                                <label className="block text-sm font-medium text-gray-700">เงื่อนไขการผ่อนชำระ</label>
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
                            <table className="table-auto w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-center">ลำดับ</th>
                                    <th className="px-4 py-2 text-center">หัวข้อเงื่อนไข</th>
                                    <th className="px-4 py-2 text-center">เครื่องมือ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td className="px-4 py-2 text-center">1</td>
                                    <td className="px-4 py-2 text-center">การผ่อนชำระเบี้ย</td>
                                    <td className="px-4 py-2 text-center">
                                        <div className="flex justify-center items-center space-x-4">
                                        <button  className="text-black hover:text-gray-700">
                                            <AiOutlineEye className="w-5 h-5" />
                                        </button>
                                        <button  className="text-black hover:text-gray-700">
                                            <AiTwotoneEdit className="w-5 h-5" />
                                        </button>
                                        <button  className="text-black hover:text-gray-700">
                                            <AiOutlineDelete className="w-5 h-5" />
                                        </button>
                                        </div>
                                    </td>
                                </tbody>
                                <tbody>
                                    <td className="px-4 py-2 text-center">2</td>
                                    <td className="px-4 py-2 text-center">การยินยอนให้บริษัทติดต่อทางโทรศัพท์</td>
                                    <td className="px-4 py-2 text-center">
                                        <div className="flex justify-center items-center space-x-4">
                                        <button  className="text-black hover:text-gray-700">
                                            <AiOutlineEye className="w-5 h-5" />
                                        </button>
                                        <button  className="text-black hover:text-gray-700">
                                            <AiTwotoneEdit className="w-5 h-5" />
                                        </button>
                                        <button  className="text-black hover:text-gray-700">
                                            <AiOutlineDelete className="w-5 h-5" />
                                        </button>
                                        </div>
                                    </td>
                                </tbody>
                                <tbody>
                                    <td className="px-4 py-2 text-center">3</td>
                                    <td className="px-4 py-2 text-center">ยินดีให้บริษัทหักเบี้ยค้าง</td>
                                    <td className="px-4 py-2 text-center">
                                        <div className="flex justify-center items-center space-x-4">
                                        <button  className="text-black hover:text-gray-700">
                                            <AiOutlineEye className="w-5 h-5" />
                                        </button>
                                        <button  className="text-black hover:text-gray-700">
                                            <AiTwotoneEdit className="w-5 h-5" />
                                        </button>
                                        <button  className="text-black hover:text-gray-700">
                                            <AiOutlineDelete className="w-5 h-5" />
                                        </button>
                                        </div>
                                    </td>
                                </tbody>
                            </table>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">จำนวนงวดที่ผ่อนชำระเบี้ย</label>
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
                        <div className="flex row gap-2">
                        <button
                            onClick={() => navigate('/projectsetting')}
                            className="w-full border-2 text-black py-2 px-4 rounded-md">
                            ยกเลิก
                            </button>
                            <button
                            className="w-full text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            style={{ backgroundColor: '#006F68'}} 
                            >
                                <AiOutlinePlus  className="inline-block mr-1" />
                                สร้างเข้าร่วมโครงการ
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    
  )
}

export default ProjectSetting;
