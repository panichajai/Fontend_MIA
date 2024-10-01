import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง

const ClientTable = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // ใช้ useNavigate แทน history.push

  useEffect(() => { 
    UserGet();
  }, []);

  const UserGet = () => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        }
      )
  }

  const CustomerUpdate = id => {
    navigate('/customerupdate/' + id); // ใช้ navigate เพื่อนำทางไปหน้าแก้ไข
  }

  const CustomerView = id => {
    navigate('/customerview/' + id); // ใช้ navigate เพื่อนำทางไปหน้าแสดงข้อมูล
  }

  const UserDelete = id => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "id": id });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/users/delete", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result['message']);
        if (result['status'] === 'ok') {
          UserGet(); // รีเฟรชข้อมูลใหม่หลังจากลบเสร็จ
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="px-6">
      <table className="table-auto w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ชื่อ</th>
            <th className="px-4 py-2">นามสกุล</th>
            <th className="px-4 py-2">อีเมล</th>
            <th className="px-4 py-2">เครื่องมือ</th>
          </tr>
        </thead>
        <tbody>
          {items.map(user => (
            <tr key={user.id} className="border-t">
              <td className="px-4 py-2">{user.fname}</td>
              <td className="px-4 py-2">{user.lname}</td>
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2 ">
                <div className="flex justify-center items-center space-x-4">
                    {/* ปุ่ม ดู */}
                    <button onClick={() => CustomerView(user.id)} Name="text-black hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                    {/* ปุ่ม แก้ไข */}
                    <button onClick={() => CustomerUpdate(user.id)} className="text-black hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    {/* ปุ่ม ลบ */} 
                    <button onClick={() => UserDelete(user.id)} className="text-black hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
