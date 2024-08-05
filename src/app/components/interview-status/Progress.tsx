import React, { useState } from 'react';
import { CirclePlus } from 'lucide-react';


interface ProgressBarProps {
  percentage: number;
  showButton?: boolean;
  buttonText?: string;
  title?: string; 
  showInterviewStatus?: boolean;
}



const Progress: React.FC<ProgressBarProps> = ({ percentage, showButton = false, buttonText = 'Schedule New Interview', showInterviewStatus = false, title = 'Interview status:' }) => {

  
    const getColor = () => {
    if (percentage <= 35) return 'bg-red-500';
    if (percentage <= 69) return 'bg-orange-500';
    return 'bg-green-500';
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="relative w-1/2 h-4 bg-gray-200 rounded">
        <div
          className={`absolute top-0 left-0 h-full rounded ${getColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="ml-4">{percentage}%</span>
      {showButton && (
        <button className="ml-4 flex items-center p-2 bg-green-700 text-white rounded whitespace-nowrap">
          <CirclePlus className="mr-2 h-4 w-4" />
          {buttonText}
        </button>
      )}
      {showInterviewStatus && (
        <div className='flex flex-col items-center ml-4'>
          <p className='text-black text-lg mb-2'>{title}</p>
          <button className="px-3 py-1 bg-red-300 text-red-800 rounded whitespace-nowrap">
            Cancelled
          </button>
        </div>
      )}
    </div>
  );
};

export default Progress;
