import React, { useState } from 'react';
import Label from '@/app/components/recruitment/Label';

const Steptwo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  return (
<div>
  <div className='flex justify-start'>
    <div className='w-full'>
      <Label htmlFor="job-description">Job description</Label>
      <textarea
        className='w-full h-[100px] mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm'
        id="job-description"
        name="textInput"
        value={inputValue}
      />
    </div>
  </div>
</div>
  );
};

export default Steptwo;
