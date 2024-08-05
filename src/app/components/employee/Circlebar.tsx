
import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
}

const CircleBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        className="w-24 h-24 transform -rotate-90"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="text-green-600"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
      </svg>
      <div className="absolute text-xl font-semibold text-black">
        {percentage}%
      </div>
    </div>
  );
};

export default CircleBar;
