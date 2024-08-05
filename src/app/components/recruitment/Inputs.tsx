import React, { useState } from 'react';

  


type InputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dropdownOptions: string[];
  type: string;
};

const Input: React.FC<InputProps> = ({ id, name, type, value, onChange, dropdownOptions  }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputClick = () => {
    if (dropdownOptions.length > 0) {
      setShowDropdown((prev) => !prev);
    }
  };

  const handleOptionClick = (option: string) => {
    onChange({ target: { name, value: option } } as React.ChangeEvent<HTMLInputElement>);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onClick={handleInputClick}
        className="mt-1 w-[300px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {showDropdown && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto cursor-pointer">
          {dropdownOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-3 py-2 hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
