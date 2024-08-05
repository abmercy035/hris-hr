'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const daysArray: Date[] = [];
    for (let i = startOfMonth.getDate(); i <= endOfMonth.getDate(); i++) {
      daysArray.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }
    setDays(daysArray);
  }, [currentDate]);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  return (
    <div className='mx-auto bg-gray-700 pt-4 pb-3 ms-5 me-5'>
      <div className='me-8 ms-8 mt-4'>
        <div className='border-l-4 border-emerald-600 mb-3 '>
          <h2 className='text-[18px] ms-3 font-bold text-white'>Calendar</h2>
        </div>
        <div className="header flex justify-between mb-4">
          <h2 className="text-[17px] ms-4 font-semibold text-white">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <div>
            <button onClick={prevMonth} className="text-gray-500">
              <ChevronLeft />
            </button>
            <button onClick={nextMonth} className="text-gray-500">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4 text-[16px] font-normal">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center font-semibold text-white">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div
              key={index}
              onClick={() => handleDayClick(day)}
              className={`day p-2 text-center text-white cursor-pointer ${selectedDay === day ? 'bg-red-500 rounded-full' : ''}`}
            >
              {day.getDate()}
            </div>
          ))}
        </div>
        <div className='text-white mt-7 ms-5'>
          <h4 className='text-gray-400 text-[15px]'>8 AM</h4>
          <p className='text-[13px]'>Stand up Meeting</p>
          <h4 className='text-gray-400 text-[15px] mt-3'>10 AM</h4>
          <p className='text-[13px]'>Travel to venue</p>
          <h4 className='text-gray-400 text-[15px] mt-3'>10:30 AM</h4>
          <p className='text-[13px]'>Google Event</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
