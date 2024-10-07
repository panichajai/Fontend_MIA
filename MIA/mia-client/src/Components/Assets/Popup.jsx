import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // ระบุ root element

const Popup = ({ 
    isOpen, 
    onRequestClose, 
    title, 
    children, 
    confirmLabel, 
    cancelLabel, 
    onConfirm, 
    icon, 
    confirmButtonStyle // รับ style ปุ่มยืนยัน 
  }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            width: '400px',
            borderRadius: '10px',
            border: 'none',
          },
        }}
      >
        <div className="flex items-center mb-4">
          {icon && <span className="mr-2">{icon}</span>}
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <div className="flex justify-between mt-6 gap-2">
          <button
            onClick={onRequestClose}
            className="flex-1 py-2 px-6 border border-gray-300 rounded-md text-black"
            style={{ backgroundColor: '#FFF' }}
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 px-6 rounded-md text-white"
            style={confirmButtonStyle} // ใช้ confirmButtonStyle สำหรับ style ของปุ่มยืนยัน
          >
            {confirmLabel}
          </button>
        </div>
      </Modal>
    );
  };
  

export default Popup;
