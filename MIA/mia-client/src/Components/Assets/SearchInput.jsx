import React from 'react';
// import { AiOutlineSearch} from "react-icons/ai";


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
        {/* <button className="px-4 text-gray-400 bg-white border-l border-gray-300 ">
          <AiOutlineSearch className="w-5 h-5"/>
        </button> */}
      </div>
  );
}

export default SearchInput;
