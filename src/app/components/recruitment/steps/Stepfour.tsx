import React, { useState } from 'react';
import Label from '@/app/components/recruitment/Label';

const Stepfour: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

 

  return (
    <div>
    <div className='flex justify-between'>
      <div className='w-full'>
        <Label htmlFor="job-description">Application Instruction</Label>
        <textarea className='mt-2 w-full h-[140px] block px-3 py-2 border border-gray-300 rounded-md shadow-sm'
          id="job-description"
          name="textInput"
          value={inputValue}
        />
      </div>
  
      <div className='w-full ms-2'>
        <Label htmlFor="job-description">Application Deadlines</Label>
        <input type='date' className='mt-2 w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm' />
      </div>
    </div>
  </div>
  
  );
};

export default Stepfour;
