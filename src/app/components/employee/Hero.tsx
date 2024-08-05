import { BadgePercent, Volume2 } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
    <div className='flex w-full'>
  <div className='bg-green-700 ms-4 pt-24 pb-24 p-6 w-2/3 text-white'>
    <h1 className='text-3xl font-semibold'>Together, We will Move </h1>
    <h1 className='text-3xl font-semibold'>Nigeria Forward!</h1>
  </div>

  <div className='w-1/3 text-black'>
    <div className='bg-white p-4 flex flex-col items-center justify-center'>
        <Volume2 className='w-16 h-16 text-black' />
        <h3 className='mt-2 text-emerald-600 font-semibold'>Announcement</h3>
    </div>
    <div className='bg-gray-400 p-6 flex flex-col items-center justify-center mt-4'>
        <BadgePercent className='w-16 h-16 text-black' />
        <h3 className='mt-2 font-semibold'>Offers</h3>
        <h3 className='text-emerald-800'>0% Off</h3>
    </div>
  </div>
</div>

  )
}
