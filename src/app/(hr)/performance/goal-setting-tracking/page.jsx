// pages/goals.tsx
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import userImg from "/public/image.jpg"
import goalStyles from '@/styles/goals.module.css'
import Links from '@/app/components/recruitment/Links'
import Searchbar from '@/app/components/recruitment/Searchbar'
import { ArrowLeft, ArrowRight, Calendar, ChevronDown, Dot, EllipsisVertical } from 'lucide-react'
import CircleBar from '@/app/components/employee/Circlebar'
import Modal from '@/app/components/recruitment/Modal';
import StepOne from '@/app/components/performance/goal-steps/StepOne';
import StepTwo from '@/app/components/performance/goal-steps/StepTwo';
import { Button } from '@/app/components/ui/button';
import { AllPagination } from '@/app/components/recruitment/Pagination';


const data = [
    {
        image: userImg,
        text: 'Reducing online chat support wait time',
        progress: 36,
        status: 'On Track',
        date: 'Sep 22 2023',
    },
    {
        image: userImg,
        text: 'Increase twitter follower count',
        progress: 100,
        status: 'At Risk',
        date: 'Sep 22 2023',
    },
    {
        image: userImg,
        text: 'Close 10 deals over 100k in MiddleTown area',
        progress: 59,
        status: 'Archieved',
        date: 'Sep 22 2023',
    },
    {
        image: userImg,
        text: 'Completing design Improvement',
        progress: 100,
        status: 'At Risk',
        date: 'Sep 22 2023',
    },
    {
        image: userImg,
        text: 'Complete 2 designs in 3 months',
        progress: 100,
        status: 'On Track',
        date: 'Sep 22 2023',
    },
    {
        image: userImg,
        text: "Apply the SMART system collaboratively create next fiscal year's goals with my team",
        progress: 100,
        status: 'No Status',
        date: 'Sep 22 2023',
    },
    {
        image: userImg,
        text: 'Create 2 XPT case studies in Q2',
        progress: 100,
        status: 'At Risk',
        date: 'Sep 22 2023',
    },
    // Add more rows here as needed
];


export default function Page() {
    const [tableData, setTableData] = useState(data)
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const [paginations, setPaginations] = useState(1);
    const paginationsRange = 10;
    const paginationsMax = paginationsRange * paginations;
    const paginationsMin = paginationsMax - paginationsRange;

    return (
        <div>
            <div className="flex px-2">
                <h1 className={goalStyles.headText}>Goal settings</h1>
                <Button className='ml-auto bg-[green]' onClick={openModal} >
                    New Goal
                </Button>
            </div>
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
                <div className='flex flex-col items-center justify-center bg-green-200'>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <div>
                            <StepOne />
                        </div>
                    </Modal>
                </div>
                <button className={goalStyles.grayBtn} type='button'>Start Date <Calendar className={goalStyles.btnIcons} /></button>
                <button className={goalStyles.grayBtn} type='button'>End Date <Calendar className={goalStyles.btnIcons} /></button>
            </div>
            <div className={goalStyles.trackContainer}>
                <CircleBar percentage={79} />
                <div className='flex gap-4 mr-10'>
                    <div className={goalStyles.trackBtn}>
                        <h1 className={goalStyles.trackNo}>18</h1>
                        <p className={goalStyles.outline}><Dot className='text-gray-500' /> No Status</p>
                    </div>
                    <div className={goalStyles.trackBtn}>
                        <h1 className={goalStyles.trackNo}>14</h1>
                        <p className={goalStyles.green}><Dot className='text-green-500' /> On Track</p>
                    </div>
                    <div className={goalStyles.trackBtn}>
                        <h1 className={goalStyles.trackNo}>6</h1>
                        <p className={goalStyles.orange}><Dot className='text-orange-500' /> At Risk</p>
                    </div>
                    <div className={goalStyles.trackBtn}>
                        <h1 className={goalStyles.trackNo}>1</h1>
                        <p className={goalStyles.red}><Dot className='text-red-500' /> Off Track</p>
                    </div>
                    <div className={goalStyles.trackBtn}>
                        <h1 className={goalStyles.trackNo}>3</h1>
                        <p className={goalStyles.gray}><Dot className='text-gray-800' /> Closed</p>
                    </div>
                </div>
            </div>
            {/* TABLE */}
            <div className="px-5 py-1">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className="border-b">
                                    {/* First Column: Profile Image and Text */}
                                    <td className="flex items-center gap-2">
                                        <div className="relative w-7 h-7 mt-4 flex items-center ml-3">
                                            <Image
                                                src={row.image}
                                                alt={row.text}
                                                className="rounded-full flex items-center me-3"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <span className='mt-4 text-wrap max-w-2'>{row.text}</span>
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
                    <table className="min-w-full divide-y divide-gray-200" >
                        <tbody>
                            <tr>
                                <td className="py-4 px-6 border-t border-gray-200 text-center text-gray-500 text-sm font-normal">
                                    <div className="flex justify-between">
                                        {paginations > 1 && (
                                            <button
                                                onClick={() => setPaginations(prev => prev - 1)}
                                                className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                            >
                                                <span>Prev</span>
                                                <ArrowLeft className="ml-2 h-5 w-5 text-gray-700" />
                                            </button>
                                        )}
                                        <AllPagination gotoPage={setPaginations} currentPage={paginations} dataLength={data?.length} />
                                        {(paginations < (data.length / paginationsRange)) && (
                                            <button
                                                onClick={() => setPaginations(prev => prev + 1)}
                                                className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                            >
                                                <span>Next</span>
                                                <ArrowRight className="ml-2 h-5 w-5 text-gray-700" />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
