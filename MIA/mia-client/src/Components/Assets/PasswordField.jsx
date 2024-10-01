import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function PasswordField({ label = "รหัสผ่าน", id = "password", value, onChange }) { // เพิ่ม props value และ onChange
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl 
      variant="outlined"
      sx={{ 
        m: 0, 
        width: '100%', // ให้กว้างเต็มที่ parent container 
        '& .MuiOutlinedInput-root': { // ปรับความสูงและการจัดวางของ input container
          height: '40px',
          display: 'flex',
          alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
        },
        '& .MuiInputBase-input': { // ปรับ padding ของ input
          padding: 0, // ลบ padding เพื่อจัดข้อความให้อยู่ตรงกลาง
          paddingLeft: '12px', // กำหนด padding ด้านซ้าย
        },
        '& .MuiInputAdornment-root': { // ปรับการจัดวางของ adornment (ไอคอน)
          height: '100%', // ปรับให้มีความสูงเต็มที่
          display: 'flex',
          alignItems: 'center', // จัดไอคอนให้อยู่ตรงกลางในแนวตั้ง
          paddingRight: '12px', // ปรับ padding ด้านขวาของไอคอน
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
    >
      <InputLabel htmlFor={id}>{label}</InputLabel> {/* ใช้ props label และ id */}
      <OutlinedInput
        id={id} // ใช้ props id
        type={showPassword ? 'text' : 'password'}
        value={value} // ใช้ props value
        onChange={onChange} // ใช้ props onChange
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label} // ใช้ props label
      />
    </FormControl>
  );
}
