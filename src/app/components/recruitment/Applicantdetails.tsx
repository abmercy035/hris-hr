import React, { useState } from 'react';
import Label from '@/app/components/recruitment/Label';
import { Dot, EditIcon } from 'lucide-react';

const Applicantdetails: React.FC = () => {
  

  return (
    <div>
      <div className='justify-start'>
       <h3 className='text-xl font-semibold mt-7'>Applicant Information</h3>
       <div className='flex items-center'>
         <Dot className='w-4 h-4' />
         <p className='text-md font-normal'>Applicant Name: John Doe</p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal'>Role: Engineering</p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal'>Applicant ID: 12345</p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal'>Email: John.doe@gmail.com</p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal'>Phone: {555} 123-4567</p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal'>LinkedIn: Linked.com/Johndoe</p>
       </div>
      
      </div>

      <div className='justify-start'>
       <h3 className='text-xl font-semibold mt-4'>Applicant Details</h3>
       <div className='flex items-center'>
         <Dot className='w-4 h-4' />
         <p className='text-md font-normal'>Applicant Date: May 15, 2024</p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal flex items-center'>Current Status: <button className='bg-blue-400 text-blue-600 p-1 m-1 rounded-sm text-xs'>New</button> <EditIcon className='w-4 h-4 ms-2' /> </p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal'>Resume: <span className='text-blue-500'>[Download Link]</span></p>
       </div>
       <div className='flex items-center'>
         <Dot className='w-5 h-5' />
         <p className='text-md font-normal'>Cover Letter: <span className='text-blue-500'>[Download Link]</span></p>
       </div>
      
      </div>
      </div>
  );
};

export default Applicantdetails;
