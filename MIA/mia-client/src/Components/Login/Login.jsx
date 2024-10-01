import React, { useState } from 'react'; // เพิ่ม useState
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import './Login.css';
import logo from '../Assets/logo yellow circle.png';
import background from '../Assets/background.png';
import Google from '../Assets/google.svg';
import Facebook from '../Assets/facebook.svg';
import PasswordField from '../Assets/PasswordField'; // นำเข้า PasswordField จากที่เราได้สร้างไว้
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Login = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  // สร้าง state เพื่อเก็บข้อมูลอีเมลและรหัสผ่านที่ผู้ใช้กรอก
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ฟังก์ชัน handleLogin เพื่อตรวจสอบอีเมลและรหัสผ่าน
  const handleLogin = () => {
    console.log("Email ที่กรอกคือ:",email);
    console.log("Password ที่กรอกคือ:",password);

    if (email === 'admin@gmail.com' && password === '1234') {
      console.log("เข้าสู่รนะบบสำเร็จ");  
      navigate('/customerlist'); 
    } else {
        console.log("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className='main-container'>
      <div className='container' style={{ backgroundImage: `url(${background})` }}>                
        <div className="left-side">
          <img src={logo} alt="logo mittare" className="logo" />
          <div className='header-left'>
            MIA Agent
          </div>
        </div>
        <div className="right-side">
          <div className="header-right">
            <div>เข้าสู่ระบบ</div>
            <div>Customer <span>มิตรแท้ประกันภัย</span></div>
          </div>
        <Box display="flex" flexDirection="column" gap={'24px'} marginTop={'32px'}>
            <TextField 
                id="outlined-basic" 
                label="อีเมล" 
                variant="outlined" 
                fullWidth 
                value={email} // ผูกกับ state email
                onChange={(e) => setEmail(e.target.value)} // เมื่อกรอกข้อมูล จะอัปเดตค่า email
                sx={{
                '& .MuiOutlinedInput-root': { // ปรับ container ของ input
                    height: '40px', // กำหนดความสูงของ input container ให้เท่ากับ PasswordField
                    display: 'flex',
                    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวตั้ง
                },
                '& .MuiInputBase-input': { // ปรับข้อความภายใน input
                    height: '100%', // ให้ input มีความสูงเต็มที่ของ container
                    padding: '0 12px', // ปรับ padding ของ input
                    boxSizing: 'border-box', // ใช้ box-sizing: border-box เพื่อให้ padding ถูกรวมในความสูง
                },
                '& .MuiInputLabel-root': { // ปรับ label
                    top: '50%', // จัดให้ label อยู่ตรงกลางในแนวตั้ง
                    transform: 'translateY(-50%)', // ใช้ transform เพื่อให้อยู่ตรงกลางแนวตั้ง
                    left: '12px', // ปรับตำแหน่งด้านซ้ายของ label
                    transition: 'all 0.2s ease', // เพิ่มการเคลื่อนไหวเพื่อให้การยกขึ้นดูนุ่มนวล
                    fontFamily: "'Prompt', sans-serif", // ใช้ฟอนต์ Prompt กับ label
                    '&.MuiInputLabel-shrink': { // เมื่อ label ถูกยกขึ้น (input มีค่า หรือโฟกัสอยู่)
                    top: '-5px', // ปรับตำแหน่ง top ของ label เมื่อถูกยกขึ้น
                    transform: 'translateY(0)', // ยก label ขึ้น
                    fontSize: '0.75rem', // ลดขนาดของ label เมื่อถูกยกขึ้น
                    left: '15px'
                    },
                },
                }}
            />
            <PasswordField 
                label="รหัสผ่าน" 
                id="password"  
                value={password} // ผูกกับ state password
                onChange={(e) => setPassword(e.target.value)} // อัปเดตค่ารหัสผ่านใน state เมื่อมีการกรอกข้อมูล
            /> 
        </Box>
          <Stack spacing={0} direction="row">
            <Button className='login'
              variant="contained" 
              sx={{ backgroundColor: '#006F68', color: '#FFFFFF', width: '100%', borderRadius: '8px', marginTop: "24px", fontFamily: "'Prompt', sans-serif" }}
              onClick={handleLogin} // เมื่อคลิกปุ่ม ให้เรียกใช้ handleLogin เพื่อตรวจสอบข้อมูล
            >
              เข้าสู่ระบบ
            </Button>    
          </Stack>
          <div className='login-social'>
            <div className="loginbutton google">
              <img src={Google} alt="" /> Google
            </div>
            <div className="loginbutton facebook">
              <img src={Facebook} alt="" /> Facebook
            </div>
          </div>
          <Stack spacing={0} direction="row" alignItems="center" sx={{ color: '#8B8B8B', fontSize: '14px', marginTop: '8px', justifyContent: "center" }}>
            <div className='caption'>ยังไม่ได้สมัครสมาชิกใช่หรือไม่? </div>
            <Button 
              variant="text"
              sx={{ color: '#006F68', fontSize: '14px', fontFamily: "'Prompt', sans-serif" }}
              onClick={() => navigate('/signup')} // ใช้ navigate เพื่อไปยังเส้นทาง /signup
            >
              สมัครสมาชิก
            </Button>
          </Stack>        
        </div>
      </div>
    </div> 
  );
}

export default Login;
