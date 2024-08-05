import { CalendarCheck, CalendarClock, Circle, Dot, Plus } from 'lucide-react'
import React from 'react'
import Head from 'next/head';
import Progressbar from './Progressbar';

export default function Tasklist() {
  return (
    <div className=''>
       <div className='bg-gray-100 m-4 p-2 justify-start'>
         <div className='ms-8 mt-8 me-8'>
           <div className='border-l-4 border-emerald-600 mb-3'>
             <h2 className='text-[18px] ms-3 font-bold text-black'>Task List</h2>
           </div>

           <div>
            <p className='font-semibold text-[12px]'>20 June <span className='text-gray-400'>.Today</span></p>
            
            <div className='flex justify-between mt-2'>
                <div className='flex items-center'>
                <CalendarClock className='w-4 h-4' /> <span className='text-green-700 font-semibold text-[12px] ms-2'>Todo</span>
                </div>

                <div className='flex items-center'>
                <Plus className='w-4 h-4 text-green-700' /><span className='text-[12px] ms-1'>Add Task</span>
                </div>
            </div>

            <div className='rounded-md border-2 p-3 mt-3'>
                <div className='flex items-start'>
                <Circle className='w-3 h-3 text-red-600' />
                <div className='ms-2'>
                    <h3 className='font-semibold text-[15px]'>Attend Nischal's Birthday Party</h3>
                    <p className='text-[11px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, reprehenderit dolorem?</p>
                </div>

                <div>
                <div className='w-14 h-14 bg-emerald-700'></div>
                </div>
                </div>
                <div className='flex m-4 justify-between'>
                    <p className='text-[12px]'>Lorem: <span className='text-green-700'>Active</span></p>
                    <p className='text-[12px]'>Status: <span className='text-red-700'>Active</span></p>
                    <p className='text-[12px] text-gray-400'>12345678 </p>

                </div>
            
            </div>

             <div className='rounded-md border-2 p-3 mt-2'>
                <div className='flex items-start'>
                <Circle className='w-3 h-3 text-green-600' />
                <div className='ms-2'>
                    <h3 className='font-semibold text-[15px]'>Attend Nischal's Birthday Party</h3>
                    <p className='text-[11px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, reprehenderit dolorem?</p>
                </div>

                <div>
                <div className='w-14 h-14 bg-emerald-700'></div>
                </div>
                </div>
                <div className='flex m-4 justify-between'>
                    <p className='text-[12px]'>Lorem: <span className='text-green-700'>Active</span></p>
                    <p className='text-[12px]'>Status: <span className='text-red-700'>Active</span></p>
                    <p className='text-[12px] text-gray-400'>12345678 </p>

                </div>
            
            </div>

             <div className='rounded-md border-2 p-3 mt-2'>
                <div className='flex items-start'>
                <Circle className='w-3 h-3 text-green-600' />
                <div className='ms-2'>
                    <h3 className='font-semibold text-[15px]'>Attend Nischal's Birthday Party</h3>
                    <p className='text-[11px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, reprehenderit dolorem?</p>
                </div>

                <div>
                <div className='w-14 h-14 bg-emerald-700'></div>
                </div>
                </div>
                <div className='flex m-4 justify-between'>
                    <p className='text-[12px]'>Lorem: <span className='text-green-700'>Active</span></p>
                    <p className='text-[12px]'>Status: <span className='text-red-700'>Active</span></p>
                    <p className='text-[12px] text-gray-400'>12345678 </p>

                </div>
            
            </div>
           </div>

           <div className='flex mt-10'>
                <div className='flex items-center'>
                <CalendarCheck className='w-4 h-4' /> <span className='text-green-700 font-semibold text-[12px] ms-2'>Task Status</span>
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <div>
                    <Progressbar progress={84} size={110} color='#50c878' />
                    <span className='flex items-center text-green-700 text-[15px]'><Dot /> Completed</span>
                </div>

                 <div>
                    <Progressbar progress={46} size={110} color='#0000FF' />
                    <span className='flex items-center text-[#0000ff] text-[15px]'><Dot /> In Progress</span>
                </div>

                 <div>
                    <Progressbar progress={13} size={110} color='#ff0000' />
                    <span className='flex items-center text-red-700 text-[15px]'><Dot /> Not Started</span>
                </div>
            </div>

             <div className='mt-10'>
                <div className='flex items-center'>
                <CalendarCheck className='w-4 h-4' /> <span className='text-green-700 font-semibold text-[12px] ms-2'>Completed Task</span>
                </div>

                <div className='rounded-md border-2 p-3 mt-4'>
                <div className='flex items-start'>
                <Circle className='w-3 h-3 text-green-600' />
                <div className='ms-2'>
                    <h3 className='font-semibold text-[15px]'>Attend Nischal's Birthday Party</h3>
                    <p className='text-[11px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, reprehenderit dolorem?</p>
                </div>

                <div>
                <div className='w-14 h-14 bg-emerald-700'></div>
                </div>
                </div>
                <div className='flex m-4 justify-between'>
                    <p className='text-[12px]'>Lorem: <span className='text-green-700'>Active</span></p>
                    <p className='text-[12px]'>Status: <span className='text-red-700'>Active</span></p>
                    <p className='text-[12px] text-gray-400'>12345678 </p>

                </div>
            
            </div>

            <div className='rounded-md border-2 p-3 mt-2'>
                <div className='flex items-start'>
                <Circle className='w-3 h-3 text-green-600' />
                <div className='ms-2'>
                    <h3 className='font-semibold text-[15px]'>Attend Nischal's Birthday Party</h3>
                    <p className='text-[11px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, reprehenderit dolorem?</p>
                </div>

                <div>
                <div className='w-14 h-14 bg-emerald-700'></div>
                </div>
                </div>
                <div className='flex m-4 justify-between'>
                    <p className='text-[12px]'>Lorem: <span className='text-green-700'>Active</span></p>
                    <p className='text-[12px]'>Status: <span className='text-red-700'>Active</span></p>
                    <p className='text-[12px] text-gray-400'>12345678 </p>

                </div>
            
            </div>

          

            </div>            

         </div>
       </div>
    </div>
  )
}
