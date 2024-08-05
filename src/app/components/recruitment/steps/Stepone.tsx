import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Stepone: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue1, setDropdownValue1] = useState('');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [dropdownValue3, setDropdownValue3] = useState('');
  const [dropdownValue4, setDropdownValue4] = useState('');
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange1 = (value: string) => {
    setDropdownValue1(value);
    setShowDropdown1(false);
  };

  const handleDropdownChange2 = (value: string) => {
    setDropdownValue2(value);
    setShowDropdown2(false);
  };

  const handleDropdownChange3 = (value: string) => {
    setDropdownValue3(value);
    setShowDropdown3(false);
  };

  const handleDropdownChange4 = (value: string) => {
    setDropdownValue4(value);
    setShowDropdown4(false);
  };

  const toggleDropdown1 = () => setShowDropdown1(!showDropdown1);
  const toggleDropdown2 = () => setShowDropdown2(!showDropdown2);
  const toggleDropdown3 = () => setShowDropdown3(!showDropdown3);
  const toggleDropdown4 = () => setShowDropdown4(!showDropdown4);

  return (
    <div>
      <form className="">
        <div className="flex space-x-4 mb-5 mt-5">
          <input
            type="text"
            placeholder="First Input"
            className="w-full px-4 py-2 border rounded"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Dropdown 1"
              className="w-full px-4 py-2 border rounded cursor-pointer"
              value={dropdownValue1}
              onClick={toggleDropdown1}
              readOnly
            />
            <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none" />
            {showDropdown1 && (
              <div className="absolute z-10 w-full bg-white border rounded shadow-lg">
                <div onClick={() => handleDropdownChange1('Option 1')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
                <div onClick={() => handleDropdownChange1('Option 2')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
                <div onClick={() => handleDropdownChange1('Option 3')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
              </div>
            )}
          </div>
        </div>
        <div className="flex space-x-4 mb-5">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Dropdown 2"
              className="w-full px-4 py-2 border rounded cursor-pointer"
              value={dropdownValue2}
              onClick={toggleDropdown2}
              readOnly
            />
            <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none" />
            {showDropdown2 && (
              <div className="absolute z-10 w-full bg-white border rounded shadow-lg">
                <div onClick={() => handleDropdownChange2('Option 1')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
                <div onClick={() => handleDropdownChange2('Option 2')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
                <div onClick={() => handleDropdownChange2('Option 3')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Dropdown 3"
              className="w-full px-4 py-2 border rounded cursor-pointer"
              value={dropdownValue3}
              onClick={toggleDropdown3}
              readOnly
            />
            <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none" />
            {showDropdown3 && (
              <div className="absolute z-10 w-full bg-white border rounded shadow-lg">
                <div onClick={() => handleDropdownChange3('Option 1')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
                <div onClick={() => handleDropdownChange3('Option 2')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
                <div onClick={() => handleDropdownChange3('Option 3')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
              </div>
            )}
          </div>
        </div>
        <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Dropdown 4"
              className="w-full px-4 py-2 border rounded cursor-pointer"
              value={dropdownValue4}
              onClick={toggleDropdown4}
              readOnly
            />
            <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none" />
            {showDropdown4 && (
              <div className="absolute z-10 w-full bg-white border rounded shadow-lg">
                <div onClick={() => handleDropdownChange4('Option 1')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
                <div onClick={() => handleDropdownChange4('Option 2')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
                <div onClick={() => handleDropdownChange4('Option 3')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
              </div>
            )}
          </div>
      </form>
    </div>
  );
};

export default Stepone;
