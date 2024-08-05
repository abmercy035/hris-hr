"use client"
import Applicantdetails from '@/app/components/recruitment/Applicantdetails'
import { Datatable } from '@/app/components/recruitment/Datatable'
import Links from '@/app/components/recruitment/Links'
import Modal from '@/app/components/recruitment/Modal'
import Searchbar from '@/app/components/recruitment/Searchbar'
import { Button } from '@/app/components/ui/button'
import { CloudDownload, EllipsisVertical } from 'lucide-react'
import Tables from '@/app/components/recruitment/Tables';
import React, { useEffect, useState } from 'react'



export default function Page() {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const [tableData, setTableData] = useState<any>([])

    useEffect(() => {
        console.log(tableData)
    }, [tableData])


    // Placeolder for tableData 
    const columns = [
        { header: 'Applicant ID', key: 'ID' },
        { header: 'Applicant Name', key: 'Name' },
        { header: 'Job title', key: 'title' },
        { header: 'Status', key: 'status' },
        { header: 'Application date', key: 'Date' },
        { header: '', key: 'icon' },
      ];
      
      const data = [
        { ID: '1001', Name: 'Alice Jhonson', title: 'Engineering', status: <button className='bg-red-300 text-red-700 px-2 py-2 rounded'>Rejected</button>, Date: '2024-01-10', icon: <EllipsisVertical /> },
        { ID: '1002', Name: 'Bob Smith', title: 'Marketing',  status: <button className='bg-blue-300 text-blue-700 px-2 py-2 rounded'>New</button>, Date: '2024-01-12', icon: <EllipsisVertical /> },
        { ID: '1003', Name: 'Carol white', title: 'Sales',  status: <button className='bg-orange-300 text-orange-700 px-2 py-2 rounded'>Under Review</button>, Date: '2024-01-08', icon: <EllipsisVertical /> },
        { ID: '1004', Name: 'David Brown', title: 'Human Resources',  status: <button className='bg-red-300 text-red-700 px-2 py-2 rounded'>Rejected</button>, Date: '2024-01-15', icon: <EllipsisVertical /> },
        { ID: '1005', Name: 'Emma Green', title: 'Customer Support',  status: <button className='bg-orange-300 text-orange-700 px-2 py-2 rounded'>Under Review</button>, Date: '2024-01-20', icon: <EllipsisVertical /> },
        { ID: '1006', Name: 'Frank Black', title: 'FInance',  status: <button className='bg-blue-300 text-blue-700 px-2 py-2 rounded'>New</button>, Date: '2024-01-22', icon: <EllipsisVertical /> },
        { ID: '1007', Name: 'Grace lee', title: 'Project Management',  status: <button className='bg-green-300 text-green-700 px-2 py-2 rounded'>Offer Mode</button>, Date: '2024-01-25', icon: <EllipsisVertical /> },
        { ID: '1008', Name: 'Henry Adams', title: 'Design',  status: <button className='bg-green-300 text-green-700 px-2 py-2 rounded'>Offer Mode</button>, Date: '2024-01-28', icon: <EllipsisVertical /> },
        { ID: '1009', Name: 'Irene Cooper', title: 'Product Development',  status: <button className='bg-blue-300 text-blue-700 px-2 py-2 rounded'>New</button>, Date: '2024-02-01', icon: <EllipsisVertical /> },
        { ID: '1010', Name: 'Jack Wilson', title: 'Data Analytics',  status: <button className='bg-green-300 text-green-700 px-2 py-2 rounded'>Offer Mode</button>, Date: '2024-02-05', icon: <EllipsisVertical /> },
      
      ];

    return (
        <div className="w-full h-full">
            <div className='flex gap-4 p-4 justify-between items-center'>
                <h1 className='font-normal text-xl'>Applicant Tracking</h1>
                <div className='me-6'>
                    <Button variant="outline" onClick={openModal}> <CloudDownload className="mr-2 h-4 w-4 " /> Export CVS</Button>
                    <div className='flex flex-col items-center justify-center'>
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <h2 className="text-xl font-bold mb-4">Applicant Details</h2>
                            <div>
                                <Applicantdetails />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className='px-5'>
                <Links dataTableDataOnClient={data} updataTableDataOnClient={setTableData} linkList={[{ name: 'All', endpoint: '/' },
                { name: 'New', endpoint: '/' },
                { name: 'Under Review', endpoint: '/' },
                { name: 'Offer Mode', endpoint: '/' },
                { name: 'Rejected', endpoint: '/' }]} />
            </div>
            <div className='px-5'>
                <Searchbar />
            </div>
            <div className='me-8 px-5'>
            <Tables columns={columns} data={data} />

            </div>
        </div>
    )
}
