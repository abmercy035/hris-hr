import React, { useState } from 'react';
import { Dot } from 'lucide-react';

const Trainingdetails: React.FC = () => {
  

  return (
    <div>
      <div>
         <h2 className="text-lg font-bold mb-2">Training Details</h2>
             <p className='flex text-sm'><Dot /><span className='font-semibold'>Title: </span> Leadership 101</p>
            <p className='flex text-sm'><Dot /><span className='font-semibold'>Category: </span> Leadership</p>
            <p className='flex text-sm'><Dot /><span className='font-semibold'>Duration: </span> 4 weeks</p>
            </div>
            <div>
            <h2 className="text-lg font-bold mb-2 mt-3">Training Description</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident quas facere dolorem?
            Minus laborum, sapiente numquam optio hic molestiae iure asperiores itaque alias? Atque, asperiores.
            Accusantium suscipit iste praesentium velit sed error amet non odit asperiores corrupti dolores,
             odio et reprehenderit beatae aliquam maxime.</p>
            </div>
             <div>
             <h2 className="text-lg font-bold mb-2 mt-3">Learning Outcomes</h2>
            <p className='flex text-sm'><Dot /> Understand difrerent Leadership styles and how to apply them</p>
            <p className='flex text-sm'><Dot /> Improve deciscion making and problem-solving skills</p>
            <p className='flex text-sm'><Dot /> Enhance communication and interpersonal skills</p>
            <p className='flex text-sm'><Dot /> Develop strategies to motivate and inspire team members</p>
            <p className='flex text-sm'><Dot /> Learn techniques for conflict resolution and team building</p>
            </div>

            <div>
            <h2 className="text-lg font-bold mb-2 mt-3">Program Modules</h2>
            <p className='flex text-sm'><Dot /> Introduction to Leadership</p>
            <p className='flex text-sm'><Dot /> Leadership Styles and Theories</p>
            </div>
      </div>
  );
};

export default Trainingdetails;
