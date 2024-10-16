import React from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus  } from 'react-icons/ai';

const InstallmentSetting = () => {
    const navigate = useNavigate();

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F8FA' }}>
        <div className="w-[248px] bg-gray-100">
            <Menu />
        </div>
        <div className="flex-1 flex flex-col">
            <Header />
                <div className="py-4 pl-6 bg-white">
                    <Nav pageName="ผ่อนชำระ Settingr" />
                    <div className="mt-4 text-4xl ">ผ่อนชำระ Setting</div>        
                </div>
                <div className="flex-1 flex flex-col max-w p-6 m-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">
                        สร้างรายละเอียดผ่อนชำระ
                    </h2>
                    <form >
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">สถานะผ่อนชำระ (TH)</label>
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
                                <label className="block text-sm font-medium text-gray-700">สถานะผ่อนชำระ (EN)</label>
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
                            onClick={() => navigate('/installmentsetting')}
                            className="w-full border-2 text-black py-2 px-4 rounded-md">
                            ยกเลิก
                            </button>
                            <button
                            className="w-full text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            style={{ backgroundColor: '#006F68'}} 
                            >
                                <AiOutlinePlus className="inline-block mr-1" />
                                สร้างผ่อนชำระ
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    
  )
}

export default InstallmentSetting;
