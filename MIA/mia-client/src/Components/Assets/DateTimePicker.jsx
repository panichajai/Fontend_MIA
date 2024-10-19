import React, { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/th'; 
import locale from 'antd/es/date-picker/locale/th_TH';


const DateTimePicker = ({ showTime = false, onDateChange , disabled }) => {
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
        locale={locale}
        onChange={handleChange} 
        value={selectedDate ? dayjs(selectedDate) : null}
        disabled={disabled}
        style={{ 
            width: '100%'
        }}
      />
    );
  };
  
  export default DateTimePicker;
