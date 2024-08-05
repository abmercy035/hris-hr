"use client"
import { ChevronLeft, Link, LocateIcon, Mail, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import InterviewStatus from '@/styles/status.module.css'
import Links from '@/app/components/recruitment/Links'
import React, { useState } from 'react'
import Details from '@/app/components/interview-status/Details'
import PastInterviews from '@/app/components/interview-status/PastInterviews'

export default function Page() {
  const [tableData, setTableData] = useState<any>([])


  const invoices = [
    {
      invoice: "1001",
      department: 'Alice Johnson',
      employmentType: "Engineering",
      status: "Cancelled",
      date: "2024-01-10",
    },
    {
      invoice: "1002",
      department: 'BobSmith',
      employmentType: "Marketing",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1003",
      department: 'Carol White',
      employmentType: "Sales",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1004",
      department: 'David Brown',
      employmentType: "Human Resources",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1005",
      department: 'Emma Green',
      employmentType: "Customer Support",
      status: "Cancelled",
      date: "2024-01-10",
    },
    {
      invoice: "1006",
      department: 'Frank Black',
      employmentType: "Finance",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1007",
      department: 'Grace Lee',
      employmentType: "Project Management",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1008",
      department: 'Henry Admas',
      employmentType: "Design",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1009",
      department: 'Irene Cooper',
      employmentType: "Product Development",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1010",
      department: 'Jack Wilson',
      employmentType: "Data Analytics",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1011",
      department: 'Alice Johnson',
      employmentType: "Engineering",
      status: "Cancelled",
      date: "2024-01-10",
    },
    {
      invoice: "1012",
      department: 'BobSmith',
      employmentType: "Marketing",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1013",
      department: 'Carol White',
      employmentType: "Sales",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1014",
      department: 'David Brown',
      employmentType: "Human Resources",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1015",
      department: 'Emma Green',
      employmentType: "Customer Support",
      status: "Cancelled",
      date: "2024-01-10",
    },
    {
      invoice: "1016",
      department: 'Frank Black',
      employmentType: "Finance",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1017",
      department: 'Grace Lee',
      employmentType: "Project Management",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1018",
      department: 'Henry Admas',
      employmentType: "Design",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1019",
      department: 'Irene Cooper',
      employmentType: "Product Development",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1020",
      department: 'Jack Wilson',
      employmentType: "Data Analytics",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1021",
      department: 'Alice Johnson',
      employmentType: "Engineering",
      status: "Cancelled",
      date: "2024-01-10",
    },
    {
      invoice: "1022",
      department: 'BobSmith',
      employmentType: "Marketing",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1023",
      department: 'Carol White',
      employmentType: "Sales",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1024",
      department: 'David Brown',
      employmentType: "Human Resources",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1025",
      department: 'Emma Green',
      employmentType: "Customer Support",
      status: "Cancelled",
      date: "2024-01-10",
    },
    {
      invoice: "1026",
      department: 'Frank Black',
      employmentType: "Finance",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1027",
      department: 'Grace Lee',
      employmentType: "Project Management",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1028",
      department: 'Henry Admas',
      employmentType: "Design",
      status: "Completed",
      date: "2024-01-10",
    },
    {
      invoice: "1029",
      department: 'Irene Cooper',
      employmentType: "Product Development",
      status: "Scheduled",
      date: "2024-01-10",
    },
    {
      invoice: "1030",
      department: 'Jack Wilson',
      employmentType: "Data Analytics",
      status: "Scheduled",
      date: "2024-01-10",
    },
  ];

  return (

    <div className={InterviewStatus.container}>
      <div className={InterviewStatus.background}>
        <ChevronLeft className={InterviewStatus.arrowIcon} />
        <div>
          <Image className={InterviewStatus.image} src='/images/image.JPG' alt='profile image' height={150} width={150} />
          <h2 className={InterviewStatus.h2}>Alice Johnsons</h2>
          <h3 className={InterviewStatus.h3}>Engineering</h3>
          <p className={InterviewStatus.p}>1001</p>
        </div>

        <div className={InterviewStatus.contact}>
          <h1 className={InterviewStatus.contacth1}>Contact Details</h1>
          <div className={InterviewStatus.contactInfo}>
            <PhoneIcon className={InterviewStatus.contactIcon} />
            <p className={InterviewStatus.contactText}>0123456789</p>
          </div>
          <div className={InterviewStatus.contactInfo}>
            <Mail className={InterviewStatus.contactIcon} />
            <p className={InterviewStatus.contactText}>alicejohnson001@gmail.com</p>
          </div>
          <div className={InterviewStatus.contactInfo}>
            <LocateIcon className={InterviewStatus.contactIcon} />
            <p className={InterviewStatus.contactText}>72, Tennysoon street, palion, sundry</p>
          </div>
        </div>
      </div>

      <div className={InterviewStatus.interviewStatus}>
        <h1 className={InterviewStatus.interviewHeader}>Interview Status</h1>
        <div>
          <Links dataTableDataOnClient={invoices} updataTableDataOnClient={setTableData} linkList={[{ name: 'Interview Details', endpoint: '/' },
          { name: 'Past Interviews', endpoint: '/' },
          { name: 'Interview FeedBacks', endpoint: '/' }]} />
          <div>
            <PastInterviews />
          </div>
        </div>
      </div>
    </div>
  )
}
