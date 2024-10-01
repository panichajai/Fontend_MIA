import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // ใช้ดึง id

export const CustomerUpdate = () => {
  const { id } = useParams(); // ดึง id ของ customer จาก URL
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');

  // กำหนดค่าเริ่มต้นสำหรับ email และ avatar
  const [email, setEmail] = useState('default@example.com');
  const [avatar, setAvatar] = useState('https://via.placeholder.com/150');

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
          setFname(result['user']['fname']);
          setLname(result['user']['lname']);
          setUsername(result['user']['username']);
          setEmail(result['user']['email'] || 'default@example.com'); // ตั้งค่าเริ่มต้นหากไม่มี email
          setAvatar(result['user']['avatar'] || 'https://via.placeholder.com/150'); // ตั้งค่าเริ่มต้นหากไม่มี avatar
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault(); // ไม่ให้ Refresh หน้าจอหลัง Submit
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // เตรียมข้อมูลที่จะแก้ไข
    const raw = JSON.stringify({
      "id": id,
      "fname": fname,
      "lname": lname,
      "username": username,
      "email": email,  
      "avatar": avatar 
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    console.log('body', raw);

    fetch("https://www.melivecode.com/api/users/update", requestOptions)
      .then(response => response.json()) 
      .then(result => {
        console.log('result', result);
        alert(result['message']);
        if (result['status'] === 'ok') {
          window.location.href = '/customerlist';
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">ข้อมูลลูกค้า</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fname" className="block text-sm font-medium text-gray-700">ชื่อ</label>
          <input 
            id="fname" 
            type="text" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
            value={fname} 
            onChange={e => setFname(e.target.value)} 
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lname" className="block text-sm font-medium text-gray-700">นามสกุล</label>
          <input 
            id="lname" 
            type="text" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
            value={lname} 
            onChange={e => setLname(e.target.value)} 
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">อีเมล</label>
          <input 
            id="username" 
            type="text" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            required 
          />
        </div>

        {/* ไม่ต้องแสดงฟิลด์ email และ avatar แต่ยังคงส่งค่าไปใน request */}
        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          บันทึกการแก้ไข
        </button>
      </form>
    </div>
  );
};
