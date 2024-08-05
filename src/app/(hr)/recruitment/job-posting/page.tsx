"use client"
import { Datatable } from '@/app/components/recruitment/Datatable'
import Links from '@/app/components/recruitment/Links'
import Modal from '@/app/components/recruitment/Modal'
import Searchbar from '@/app/components/recruitment/Searchbar'
import Stepper from '@/app/components/recruitment/Stepper'
import { Button } from '@/app/components/ui/button'
import { CloudDownload, Mail } from 'lucide-react'
import React, { useState } from 'react'

export default function Page() {
    const [tableData, setTableData] = useState<any>([])
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // INPUT AND LABEL 
    const [formData, setFormData] = useState({ firstName: '', lastName: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };
    // Placeolder for tableData 
    const invoices = [
        {
            invoice: "Engineering",
            department: 'Engineering',
            employmentType: "Full Time",
            status: "Active",
            date: "January 15 2024",
        },
        {
            invoice: "Marketing",
            department: 'Marketing',
            employmentType: "Part Time",
            status: "Closed",
            date: "February 10 2024",
        },
        {
            invoice: "Sales",
            department: 'Sales',
            employmentType: "Contract",
            status: "Draft",
            date: "March 5 2024",
        },
        {
            invoice: "Human Resources",
            department: 'Human Resources',
            employmentType: "Full Time",
            status: "Closed",
            date: "April 12 2024",
        },
        {
            invoice: "Customer Support",
            department: 'Customer Support',
            employmentType: "Part Time",
            status: "Active",
            date: "May 8 2024",
        },
        {
            invoice: "Finance",
            department: 'Finance',
            employmentType: "Part Time",
            status: "Active",
            date: "June 21 2024",
        },
        {
            invoice: "Project Management",
            department: 'Project Management',
            employmentType: "Contract",
            status: "Closed",
            date: "July 16 2024",
        },
        {
            invoice: "Design",
            department: 'Design',
            employmentType: "Contract",
            status: "Active",
            date: "August 30 2024",
        },
        {
            invoice: "Product Development",
            department: 'Product Development',
            employmentType: "Contract",
            status: "Draft",
            date: "September 25 2024",
        },
        {
            invoice: "Data Analytics",
            department: 'Data Analytics',
            employmentType: "Contract",
            status: "Draft",
            date: "October 14 2024",
        },
    ];
    return (
        <div className="w-full h-full">
            <div className='flex gap-4 p-4 justify-between items-center'>
                <h1 className='font-normal text-xl'>Job Posting</h1>
                <div className='me-6'>
                    <Button variant="outline"> <CloudDownload className="mr-2 h-4 w-4 bg-[#148359]" /> Export CVS</Button>
                    <Button className='ms-2 bg-[#148359] hover:bg-[#148359]' onClick={openModal}>
                        <Mail className="mr-2 h-4 w-4" /> Create Job
                    </Button>
                    <div className='flex flex-col items-center justify-center bg-green-200'>
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <h2 className="text-xl font-bold mb-4">Job Posting</h2>
                            <div>
                                <Stepper />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div>
                <Links dataTableDataOnClient={invoices} updataTableDataOnClient={setTableData} linkList={[{ name: 'All', endpoint: '/' },
                { name: 'Active', endpoint: '/' },
                { name: 'Draft', endpoint: '/' },
                { name: 'Closed', endpoint: '/' }]} />
            </div>
            <div>
                <Searchbar />
            </div>
            <div className='me-8 overflow-y-auto'>
                <Datatable tableHead={["Job Title", "Department", "Employment Type", "Status", "Application Deadline"]}
                    tableData={tableData} />
            </div>
        </div>
    )
}
