import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import logo from '../Assets/logo yellow circle.png';
import background from '../Assets/background.png';
import Google from '../Assets/google.svg';
import Facebook from '../Assets/facebook.svg';
import PasswordField from '../Assets/PasswordField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAuth } from '../../service/AuthContext';
import API_BASE_URL from '../../config';

const Login = () => {
  const api = API_BASE_URL;
  const navigate = useNavigate();
  const OnChangePage  = page => {
      navigate(`/${page}`); 
  }  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useAuth();

  const handleLogin = () => {
    fetch(api+'users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: email, 
        user_password: password,
      }),
    })
    .then(response => response.json())
    .then(result => {
      console.log("ผลลัพธ์จากการเข้าสู่ระบบ:", result);
      if (result.success) {
        console.log("เข้าสู่ระบบสำเร็จ");
        login(result.data);
        OnChangePage ('')    
      } else {
        console.log("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }
    })
    .catch(error => {
      console.error("เกิดข้อผิดพลาดในการเข้าสู่ระบบ:", error);
      alert('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
    });
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
            <div>
                <label htmlFor="email"  style={{ color: '#006F68' }} className="block text-sm font-medium">
                    อีเมล
                </label>
                <input 
                    id="email" 
                    type="email" 
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md " 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
              <PasswordField 
                label="รหัสผ่าน"               
                placeholder="กรอกรหัสผ่าน"  
                value={password}              
                onChange={e => setPassword(e.target.value)}  
              />
            </div>
          </Box>
          <Stack spacing={0} direction="row">
            <Button className='login'
              variant="contained" 
              sx={{ backgroundColor: '#006F68', color: '#FFFFFF', width: '100%', borderRadius: '8px', marginTop: "24px", fontFamily: "'Prompt', sans-serif" }}
              onClick={handleLogin} 
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
              onClick={() => OnChangePage ('signup')} 
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
