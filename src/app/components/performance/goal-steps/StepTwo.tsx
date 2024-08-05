import { Circle, CirclePlus } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Links from '@/app/components/recruitment/Links'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Image from 'next/image';

const StepTwo = () => {
  // const editorRef = useRef(null);
  const [comment, setComment] = useState<any>([])
  const profileImage = '/image/image.jpg'

  // useEffect(() => {
  //   const quill = new Quill(editorRef.current, {
  //     theme: 'snow',
  //     modules: {
  //       toolbar: [
  //         ['bold', 'italic', 'underline', 'strike'],
  //         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //         ['link', 'image'],
  //         ['clean']
  //       ]
  //     },
  //     placeholder: 'Enter your text here...'
  //   });

  //   return () => {
  //     quill.disable();
  //   };
  // }, []);

  return (
    <div className='flex justify-between'>
      {/* User profile and Information */}
      <div className='w-2/3 mr-3'>
        <div className='flex items-center gap-1'>
          <Image src={profileImage} alt='Profile' className='w-4 h-4 rounded-full mr-2' />
          <h2 className='font-semibold text-lg'>Laura Miller</h2>
        </div>

        <div>
          <h2 className='text-md font-semibold py-2'>Improve Fuel Efficiency by 100%</h2>
          <p className='text-black text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus atque voluptatem incidunt aperiam temporibus? Consectetur perspiciatis asperiores fugiat vitae! Neque?</p>
        </div>

        {/* PROGRESS BAR */}
        <div className='flex items-center py-3'>
          <div className="relative w-full h-3 bg-gray-200 rounded">
            <div
              className="absolute h-3 bg-green-500 rounded"
              style={{ width: '0' }}
            ></div>
          </div>
          <span className="ml-4">0%</span>
        </div>

        <div className='flex items-center justify-between'>
          <span>Start: 0</span>
          <span>Goal: 10</span>
        </div>

        <div className='flex items-center gap-4 py-2'>
          <span>Current Value: 0/10</span>
          <button className='bg-green-700 text-white rounded px-2 py-1' type='button'>Update Progress</button>
        </div>

        <div className='flex items-center gap-4 py-3'>
          <span>Status:</span>
          <Circle className='w-5 h-5 text-gray-800 bg-gray-600 rounded-full' />
          <Circle className='w-5 h-5 text-gray-500' />
          <Circle className='w-5 h-5 text-gray-400' />
          <Circle className='w-5 h-5 text-gray-500' />

          <button className='border border-gray-400 px-2 py-1 rounded' type='button'>Close Goal</button>
        </div>
        <div>
          <Links dataTableDataOnClient={comment} updataTableDataOnClient={setComment} linkList={[{ name: 'Comments(0)', endpoint: '/' },
          { name: 'Progress Updates', endpoint: '/' }]} />
        </div>
        {/* COMMENT  */}
        <div>

        </div>

      </div>

      <div className='w-1/3 ml-3'>
        <h3 className='text-gray-600 text-lg'>Created</h3>

        <div className='flex items-center gap-2'>
          <Image src={profileImage} alt='Profile' className='w-4 h-4 rounded-full mr-2' />
          <span className='font-semibold text-sm'>December 28, 2023</span>
        </div>
        <div className='flex flex-col py-2'>
          <span className='text-gray-500 text-sm'>Start Date</span>
          <span className='text-black font-semibold text-sm'>Start of Jan 1st 2024</span>
        </div>

        <div className='flex flex-col py-2'>
          <span className='text-gray-500 text-sm'>End Date</span>
          <span className='text-black font-semibold text-sm'>Start of Dec 31st 2024</span>
        </div>

        <div className='flex flex-col py-2'>
          <span className='text-gray-500 text-sm'>Visibility</span>
          <span className='text-black font-semibold text-sm'>Public</span>
        </div>

        <hr className='pt-1' />
        <div className='pt-2 flex items-center justify-between'>
          <span className='text-black font-semibold text-sm'>Parent Goal</span>
          <button className='border border-gray-400 px-2 py-1 rounded flex items-center' type='button'><CirclePlus className='w-4 h-4 me-1' /> Add</button>
        </div>
        <span className='text-sm pt-1'>There are no parent goal related to this goal</span>

        <hr className='pt-1' />
        <div className='pt-2 flex items-center justify-between'>
          <span className='text-black font-semibold text-sm'>Related Task</span>
          <button className='border border-gray-400 px-2 py-1 rounded flex items-center' type='button'><CirclePlus className='w-4 h-4 me-1' /> Add</button>
        </div>
        <span className='text-sm pt-1'>There are no task related to this goal</span>
      </div>
    </div>
  )
}

export default StepTwo
