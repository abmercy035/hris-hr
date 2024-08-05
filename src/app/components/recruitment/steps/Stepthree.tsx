import React, { useState } from 'react';
import Label from '@/app/components/recruitment/Label';

const Stepthree: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue1, setDropdownValue1] = useState('');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [dropdownValue3, setDropdownValue3] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownValue1(e.target.value);
  };

  const handleDropdownChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownValue2(e.target.value);
  };

  const handleDropdownChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownValue3(e.target.value);
  };

  return (
    <div>
      <div className='justify-start'>
        <div className='w-full'>
          <Label htmlFor="job-description">Required Qualification</Label>
          <textarea className='w-full h-[100px] mt-2 block px-3 py-2 border border-gray-300 rounded-md shadow-sm'
            id="job-description"
            name="textInput"
            value={inputValue}
          />
        </div>

        <div className='w-ful mt-3'>
          <Label htmlFor="job-description">Prefered Qualifications</Label>
          <textarea className='w-full h-[100px] mt-2 block px-3 py-2 border border-gray-300 rounded-md shadow-sm'
            id="job-description"
            name="textInput"
            value={inputValue}
          />
        </div>
      </div>

      </div>
  );
};

export default Stepthree;
