import React from 'react'
import Image from 'next/image'
import Tasklist from './Tasklist'
import Calender from './Calender'

export default function Releases() {
  return (
    <div className='w-full'>
      <div className='bg-gray-100 m-4 p-2 h-1/2 pb-2'>
        <div className='ms-5 mt-8'>
          <div className='border-l-4 border-emerald-600 mb-3'>
            <p className='text-[14px] ms-3 font-light text-gray-400'>Welcome to NCCC</p>
            <h2 className='text-[18px] ms-3 font-bold text-black'>News Releases</h2>
          </div>

          <div className='flex justify-between'>
            <div>
              <div className='w-48'>
                <div className='w-full h-32 bg-emerald-700'></div>
                <h1 className='font-semibold text-[15px] mt-5'>A Fundraiser for the City club</h1>
                <p className='font-thin text-gray-400 text-[11px] mt-3 mb-5'>May 22, 2024 | Public Notices</p>
                <p className='font-thin text-gray-400 text-[11px] text-justify'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, fugit. Cupiditate error amet corporis mollitia fugiat.
                </p>
                <button className='bg-emerald-600 text-white font-semibold rounded-sm p-2 text-sm mt-4' type='submit'>Suggestion</button>
              </div>
            </div>

            <div className='ms-6'>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-emerald-700'></div>
                <div className='ms-2'>
                  <h3 className='font-semibold text-[12px]'>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className='text-[11px] font-normal mt-1'>May 22, 2024 | Public Notices</p>
                </div>
              </div>

              <div className='flex items-center mt-2'>
                <div className='w-12 h-12 bg-emerald-700'></div>
                <div className='ms-2'>
                  <h3 className='font-semibold text-[12px]'>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className='text-[11px] font-normal mt-1'>May 22, 2024 | Public Notices</p>
                </div>
              </div>

              <div className='flex items-center mt-2'>
                <div className='w-12 h-12 bg-emerald-700'></div>
                <div className='ms-2'>
                  <h3 className='font-semibold text-[12px]'>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className='text-[11px] font-normal mt-1'>May 22, 2024 | Public Notices</p>
                </div>
              </div>

              <div className='flex items-center mt-2'>
                <div className='w-12 h-12 bg-emerald-700'></div>
                <div className='ms-2'>
                  <h3 className='font-semibold text-[12px]'>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className='text-[11px] font-normal mt-1'>May 22, 2024 | Public Notices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='w-full'>
          <Calender />
        </div>
      </div>
    </div>
  )
}
