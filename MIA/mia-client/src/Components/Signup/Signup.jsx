import React, {  } from 'react' 
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import logo from '../Assets/logo yellow circle.png';
import background from '../Assets/background.png';
import PasswordField from '../Assets/PasswordField'; // นำเข้า PasswordField จากที่เราได้สร้างไว้
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



const Signup = () => {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

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
                        <div className="text1">
                            สมัครสมาชิก
                        </div>
                        <div className="text2">
                            Customer <span>มิตรแท้ประกันภัย</span>
                        </div>
                    </div>
                        <Box display="flex" flexDirection="column" gap={'16px'} marginTop={'32px'}>
                            <Box display="flex" flexDirection="row" gap={'8px'}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="ชื่อ" 
                                    variant="outlined" 
                                    fullWidth 
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': { // ปรับ container ของ input
                                            height: '40px', // กำหนดความสูงของ input container
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
                                <TextField 
                                    id="outlined-basic" 
                                    label="นามสกุล" 
                                    variant="outlined" 
                                    fullWidth 
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': { // ปรับ container ของ input
                                            height: '40px', // กำหนดความสูงของ input container
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
                            </Box>
                            <TextField 
                                id="outlined-basic" 
                                label="อีเมล" 
                                variant="outlined" 
                                fullWidth 
                                sx={{ 
                                    '& .MuiOutlinedInput-root': { // ปรับ container ของ input
                                        height: '40px', // กำหนดความสูงของ input container
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
                            <PasswordField label="รหัสผ่าน" id="password" /> {/* ฟิลด์รหัสผ่าน */}
                            <PasswordField label="ยืนยันรหัสผ่าน" id="confirm-password" /> {/* ฟิลด์ยืนยันรหัสผ่าน */}
                        </Box>

                        <Stack spacing={0} direction="row">
                            <Button className='signup'
                                variant="contained" 
                                sx={{ backgroundColor: '#006F68', 
                                    color: '#FFFFFF' , 
                                    width:'100%',
                                    borderRadius: '8px', // ปรับความโค้งของมุม
                                    marginTop: "32px",
                                    fontFamily: "'Prompt', sans-serif", // ใช้ฟอนต์ Prompt กับ label
                                }}
                            >
                                สมัครสมาชิก
                            </Button>
                        </Stack>
                        <Stack 
                            spacing={0} // เพิ่ม spacing ให้มีระยะห่างระหว่างองค์ประกอบเล็กน้อย
                            direction="row" 
                            alignItems="center" // จัดให้องค์ประกอบอยู่ตรงกลางในแนวตั้ง
                            sx={{color: '#8B8B8B',fontSize:'14px', marginTop: '8px', justifyContent: "center"}}

                        >
                            <div className='caption'>หากมีบัญชีอยู่แล้ว?</div>
                            <Button 
                            variant="text"
                            sx={{ color: '#006F68',fontSize:'14px',fontFamily: "'Prompt', sans-serif", }}
                            onClick={() => navigate('/')} // ใช้ navigate เพื่อไปยังเส้นทาง /forgotpassword
                            >
                                เข้าสู่ระบบ</Button> 
                        </Stack>        
                                             
                </div>
            </div>
        </div> 
    )
}

export default Signup