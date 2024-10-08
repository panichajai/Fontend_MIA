import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo yellow circle.png';
import background from '../Assets/background.png';
import PasswordField from '../Assets/PasswordField'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import API_BASE_URL from '../../config';


const Signup = () => {
  const api = API_BASE_URL;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
        alert("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
        return;
    }

    try {
        const response = await fetch(api+'users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_email: email,
                user_password: password,
            }),
        });

        const result = await response.json();
        console.log('Result:', result); 
        console.log('Result Message:', result.message); 

        if (!response.ok) {
            if (result.message && result.message.includes('')) {
                alert('อีเมลนี้มีผู้ใช้งานแล้ว');
            } else {
                alert('เกิดข้อผิดพลาด: ' + result.message);
            }
            return;
        }

        if (result.success) {
            alert('สมัครสมาชิกสำเร็จ');
            navigate('/');
        } else {
            alert(result.message || 'เกิดข้อผิดพลาด');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('เกิดข้อผิดพลาดในการสมัครสมาชิก');
    }
};


  return (
    <div className='main-container'>
      <div className='container' style={{ backgroundImage: `url(${background})` }}>
        <div className="left-side">
          <img src={logo} alt="logo mittare" className="logo" />
          <div className='header-left'>MIA Agent</div>
        </div>
        <div className="right-side">
          <div className="header-right">
            <div className="text1">สมัครสมาชิก</div>
            <div className="text2">
              Customer <span>มิตรแท้ประกันภัย</span>
            </div>
          </div>
          <Box display="flex" flexDirection="column" gap={'16px'} marginTop={'32px'}>
            <div className="">
              <label htmlFor="email" style={{ color: '#006F68' }} className="block text-sm font-medium">
                อีเมล
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                required
              />
            </div>
            <PasswordField
              label="รหัสผ่าน"
              id="password"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
            <PasswordField
              label="ยืนยันรหัสผ่าน"
              id="confirm-password"
              value={confirmPassword} 
              onChange={e => setConfirmPassword(e.target.value)} 
            />
          </Box>

          <Stack spacing={0} direction="row">
            <Button
              className='signup'
              variant="contained"
              sx={{
                backgroundColor: '#006F68',
                color: '#FFFFFF',
                width: '100%',
                borderRadius: '8px',
                marginTop: "32px",
                fontFamily: "'Prompt', sans-serif",
              }}
              onClick={handleSignup} 
            >
              สมัครสมาชิก
            </Button>
          </Stack>
          <Stack
            spacing={0}
            direction="row"
            alignItems="center"
            sx={{ color: '#8B8B8B', fontSize: '14px', marginTop: '8px', justifyContent: "center" }}
          >
            <div className='caption'>หากมีบัญชีอยู่แล้ว?</div>
            <Button
              variant="text"
              sx={{ color: '#006F68', fontSize: '14px', fontFamily: "'Prompt', sans-serif" }}
              onClick={() => navigate('/')}
            >
              เข้าสู่ระบบ
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Signup;
