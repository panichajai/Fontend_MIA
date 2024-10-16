import React, { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/th'; 

const DateTimePicker = ({ showTime = false, onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const formatToBuddhistYear = (date) => {
      if (!date) return '';
      return dayjs(date).locale('th').add(543, 'year').format('DD/MM/YYYY HH:mm'); 
    };
  
    
    const handleChange = (date) => {
      if (date) {
        setSelectedDate(date);
        onDateChange(date.toISOString());
      }
    };
  
    return (
      <DatePicker
        showTime={showTime ? { format: 'HH:mm' } : false} 
        format={(value) => formatToBuddhistYear(value)} 
        onChange={handleChange} 
        value={selectedDate ? dayjs(selectedDate) : null}
        locale={{ locale: 'th' }} 
      />
    );
  };
  
  export default DateTimePicker;
