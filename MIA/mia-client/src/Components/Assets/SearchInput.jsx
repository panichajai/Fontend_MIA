import React from 'react';

export const SearchInput = ({ placeholder, value, onChange }) => {

  return (
      <div className="flex border border-gray-300 overflow-hidden w-full rounded-md">
        <input
          type="text"
          className="px-4 py-2 focus:outline-none w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
  );
}

export default SearchInput;
