import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // ใช้ดึง id

const CustomerView = () => {
  const { id } = useParams(); // ดึง id ของ customer จาก URL
  const [customer, setCustomer] = useState({
    fname: '',
    lname: '',
    username: ''
  });

  useEffect(() => {
    // ดึงข้อมูลลูกค้าโดยใช้ API
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/users/" + id, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result['status'] === 'ok') {
          setCustomer({
            fname: result['user']['fname'],
            lname: result['user']['lname'],
            username: result['user']['username']
          });
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">ข้อมูลลูกค้า</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">{customer.fname}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">นามสกุล</label>
        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">{customer.lname}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">อีเมล</label>
        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">{customer.username}</p>
      </div>
    </div>
  );
};

export default CustomerView;
