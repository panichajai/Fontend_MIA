import React, { useState } from 'react';

export const CustomerCreate = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');

  // กำหนดค่าเริ่มต้นให้กับ email และ avatar (โดยไม่ต้องใช้ setEmail และ setAvatar)
  const email = 'default@example.com'; // ค่าเริ่มต้นสำหรับ email
  const avatar = 'https://via.placeholder.com/150'; // ค่าเริ่มต้นสำหรับ avatar

  const handleSubmit = event => {
    event.preventDefault(); // ไม่ให้ Refresh หน้าจอหลัง Submit
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "fname": fname,
      "lname": lname,
      "username": username,
      "email": email,  // ส่ง email ที่มีค่าเริ่มต้น
      "avatar": avatar // ส่ง avatar ที่มีค่าเริ่มต้น
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    console.log('body', raw);

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then(response => response.json()) /* แปลงเป็น json */
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

        {/* ไม่แสดง email และ avatar แต่ส่งไปด้วยค่าเริ่มต้น */}
        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
};
