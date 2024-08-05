// pages/company goals.tsx
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import goalStyles from '@/styles/goals.module.css'
import Links from '@/app/components/recruitment/Links'
import Searchbar from '@/app/components/recruitment/Searchbar'
import { Calendar, ChevronDown, Dot, EllipsisVertical } from 'lucide-react'
import CircleBar from '@/app/components/employee/Circlebar'
import PerformanceTable from '@/app/components/performance/PerformanceTable'


const data = [
  {
    image: '/image/image.jpg',
    text: 'Reducing online chat support wait time',
    progress: 36,
    status: 'On Track',
    date: 'Sep 22 2023',
  },
  {
    image: '/image/image.jpg',
    text: 'Increase twitter follower count',
    progress: 100,
    status: 'At Risk',
    date: 'Sep 22 2023',
  },
  {
    image: '/image/image.jpg',
    text: 'Close 10 deals over 100k in MiddleTown area',
    progress: 59,
    status: 'Archieved',
    date: 'Sep 22 2023',
  },
  {
    image: '/image/image.jpg',
    text: 'Completing design Improvement',
    progress: 100,
    status: 'At Risk',
    date: 'Sep 22 2023',
  },
  {
    image: '/image/image.jpg',
    text: 'Complete 2 designs in 3 months',
    progress: 100,
    status: 'On Track',
    date: 'Sep 22 2023',
  },
  {
    image: '/image/image.jpg',
    text: "Apply the SMART system collaboratively create next fiscal year's goals with my team",
    progress: 100,
    status: 'No Status',
    date: 'Sep 22 2023',
  },
  {
    image: '/image/image.jpg',
    text: 'Create 2 XPT case studies in Q2',
    progress: 100,
    status: 'At Risk',
    date: 'Sep 22 2023',
  },
  // Add more rows here as needed
];


export default function page() {
  const [tableData, setTableData] = useState<any>(data)

  useEffect(() => {
    console.log(tableData)
  }, [tableData])
  
  return (
    <div>
      <h1 className={goalStyles.headText}>Goal settings</h1>
      <div className='px-5'>
        <Links dataTableDataOnClient={tableData} updataTableDataOnClient={setTableData} linkList={[{ name: 'My Goals', endpoint: '/' },
        { name: 'My Team', endpoint: '/' },
        { name: 'Department', endpoint: '/' },
        { name: 'Company goals', endpoint: '/' },
        { name: 'All Goals', endpoint: '/' }]} />
         
      </div>
      <div className='px-5'>
        <Searchbar />
      </div>
      <div className={goalStyles.btnContainer}>
        <button className={goalStyles.greenBtn} type='button'>All Goals <ChevronDown className={goalStyles.btnIcons} /></button>
        <button className={goalStyles.grayBtn} type='button'>Start Date <Calendar className={goalStyles.btnIcons} /></button>
        <button className={goalStyles.grayBtn} type='button'>End Date <Calendar className={goalStyles.btnIcons} /></button>
      </div>
      <div className={goalStyles.trackContainer}>
        <CircleBar percentage={20} />
        <div className='flex gap-4 mr-10'>
          <div className={goalStyles.trackBtn}>
            <h1 className={goalStyles.trackNo}>8</h1>
            <p className={goalStyles.outline}><Dot className='text-gray-500' /> No Status</p>
          </div>
          <div className={goalStyles.trackBtn}>
            <h1 className={goalStyles.trackNo}>10</h1>
            <p className={goalStyles.green}><Dot className='text-green-500' /> On Track</p>
          </div>
          <div className={goalStyles.trackBtn}>
            <h1 className={goalStyles.trackNo}>3</h1>
            <p className={goalStyles.orange}><Dot className='text-orange-500' /> At Risk</p>
          </div>
          <div className={goalStyles.trackBtn}>
            <h1 className={goalStyles.trackNo}>0</h1>
            <p className={goalStyles.red}><Dot className='text-red-500' /> Off Track</p>
          </div>
          <div className={goalStyles.trackBtn}>
            <h1 className={goalStyles.trackNo}>0</h1>
            <p className={goalStyles.gray}><Dot className='text-gray-800' /> Closed</p>
          </div>
        </div>
      </div>

    {/* TABLE */}

      <div className="px-5 py-4">
      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              {/* First Column: Profile Image and Text */}
              <td className="flex items-center">
                <div className="relative w-7 h-7 mt-4 flex items-center ml-3">
                  <Image
                    src={row.image}
                    alt={row.text}
                    className="rounded-full flex items-center me-3"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className='mt-4'>{row.text}</span>
              </td>

              {/* Second Column: Progress Bar and Percentage */}
              <td className="p-4 w-3/12">
                <div className="flex items-center">
                  <div className="relative w-full h-3 bg-gray-200 rounded">
                    <div
                      className="absolute h-3 bg-green-500 rounded"
                      style={{ width: `${row.progress}%` }}
                    ></div>
                  </div>
                  <span className="ml-4">{row.progress}%</span>
                </div>
              </td>

              {/* Third Column: "On Track" Text */}
              <td className="p-4 w-2/12">
                <span>{row.status}</span>
              </td>

              {/* Fourth Column: Dates */}
              <td className="p-4 w-2/12">
                <span className='text-red-500'>{row.date}</span>
              </td>

              {/* Fifth Column: Icon */}
              <td className="p-4 w-1/12">
                <EllipsisVertical className="text-black" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  )
}