import React, { useState } from 'react';
import Header from '../Assets/Header';
import Menu from '../Assets/Menu';
import Nav from '../Assets/Nav';
import PasswordField from '../Assets/PasswordField';
import Dropdown from '../Assets/Dropdown';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineSave  } from 'react-icons/ai';

const AdminUser = ({ mode }) => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const disable = mode === "view" ? true : false;

    const [adminuser, setAdminUser] = useState({
        admin_name: ''
    });

    const [selectedRole, setselectedRole] = useState('');
    const handleRoleChange = (e) => {
        setselectedRole(e.target.value);
        setAdminUser({ ...adminuser , adminuser_role: e.target.value });
    };
    const role = ['1', '2', '3'];

    const [selectedStatus, setselectedStatus] = useState('');
    const handleStatusChange = (e) => {
        setselectedStatus(e.target.value);
        setAdminUser({ ...adminuser , adminuser_role: e.target.value });
    };
    const status = ['1', '2', '3'];


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
                        <div className="flex flex-col gap-6 mb-12">
                            <div className="flex row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
                                    <input
                                        type="text"
                                        value={adminuser.insurance_policystatus}
                                        onChange={e => {
                                          const value = e.target.value;
                                          if (/^[ก-๙\s]*$/.test(value)) {
                                            setAdminUser({ ...adminuser, insurance_policystatus: value });
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
                                    <label className="block text-sm font-medium text-gray-700">นามสกุล</label>
                                    <input
                                        type="text"
                                        value={adminuser.insurance_policystatus}
                                        onChange={e => {
                                          const value = e.target.value;
                                          if (/^[ก-๙\s]*$/.test(value)) {
                                              setAdminUser({ ...adminuser, insurance_policystatus: value });
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
                                    <label className="block text-sm font-medium text-gray-700">แผนก</label>
                                    <input
                                        type="text"
                                        value={adminuser.insurance_policystatus}
                                        onChange={e => {
                                          const value = e.target.value;
                                          if (/^[ก-๙\s]*$/.test(value)) {
                                              setAdminUser({ ...adminuser, insurance_policystatus: value });
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
                                    <label className="block text-sm font-medium text-gray-700">ตำแหน่ง</label>
                                    <input
                                        type="text"
                                        value={adminuser.insurance_policystatus}
                                        onChange={e => {
                                          const value = e.target.value;
                                          if (/^[ก-๙\s]*$/.test(value)) {
                                            setAdminUser({ ...adminuser, insurance_policystatus: value });
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
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">อีเมล</label>
                                <input
                                    type="text"
                                    value={adminuser.insurance_policystatus}
                                    onChange={e => {
                                      const value = e.target.value;
                                      if (/^[ก-๙\s]*$/.test(value)) {
                                          setAdminUser({ ...adminuser, insurance_policystatus: value });
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
                                    label="บทบาท" 
                                    placeholder="เลือก" 
                                    value={selectedRole} 
                                    onChange={handleRoleChange}
                                    options={role}
                                    mode={mode} 
                                    />
                                </div>
                            </div>    
                            <div className="flex-1">
                                <div>
                                    <Dropdown 
                                    label="สถานะ" 
                                    placeholder="เลือก" 
                                    value={selectedStatus} 
                                    onChange={handleStatusChange}
                                    options={status}
                                    mode={mode} 
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
                                <div>
                                    <PasswordField 
                                        placeholder="รหัสผ่าน"  
                                        value={password}              
                                        onChange={e => setPassword(e.target.value)}  
                                    />
                                </div>
                            </div>    
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">ยืนยันรหัสผ่าน</label>
                                <div>
                                    <PasswordField 
                                        placeholder="ยืนยันรหัสผ่าน"  
                                        value={confirmPassword}              
                                        onChange={e => setConfirmPassword(e.target.value)}  
                                    />
                                </div>
                            </div> 
                        </div>
                        {mode !== 'view' && (
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
                                    {mode === 'create' ? (
                                    <>
                                        <AiOutlinePlus  className="inline-block mr-1" />
                                        เพิ่ม Admin User
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
                                onClick={() => navigate('/adminuser')}
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

export default AdminUser;
