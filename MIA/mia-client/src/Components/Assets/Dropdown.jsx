import React from 'react';

const Dropdown = ({ value, onChange, label, options, placeholder, mode }) => {
  const Disabled = mode === 'view';

  return (
    <div className="mb-4">

      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none focus:ring-0 focus:border-gray-300"
          required
          disabled={Disabled}
          style={{ cursor: Disabled ? 'not-allowed' : 'pointer',
            backgroundColor: Disabled ? '#F5F5F5' : 'white',
            color: Disabled ? '#6B7280' : 'inherit'
           }}
          >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option} className="hover:bg-green-600 hover:text-white">
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
