'use client'
import React, { useEffect, useState } from 'react';
import learningAndDev from '@/styles/learning.module.css';
import Searchbar from '@/app/components/recruitment/Searchbar'
import Links from '@/app/components/recruitment/Links'
import Tables from '@/app/components/recruitment/Tables';
import { EllipsisVertical } from 'lucide-react';

const columns = [
  { header: 'Program Title', key: 'title' },
  { header: 'Category', key: 'category' },
  { header: 'Durations', key: 'duration' },
  { header: '', key: 'icon' },
];

const data = [
  { title: 'Leadership 101', category: 'Leadership', duration: '4 weeks', icon: <EllipsisVertical /> },
  { title: 'Python Basics', category: 'Technical', duration: '4 weeks', icon: <EllipsisVertical /> },
  { title: 'Effective Communication', category: 'Skills', duration: '4 weeks', icon: <EllipsisVertical /> },
  { title: 'Project Management Fundamentals', category: 'Management', duration: '4 weeks', icon: <EllipsisVertical /> },
  { title: 'Data Analysis with Excel', category: 'Technical', duration: '4 weeks', icon: <EllipsisVertical /> },
  { title: 'Customer Service excellence', category: 'Customer Service', duration: '4 weeks', icon: <EllipsisVertical /> },
  { title: 'Time Management Strategies', category: 'Productivity', duration: '3 weeks', icon: <EllipsisVertical /> },
  { title: 'Advanced Javascript', category: 'Technical', duration: '4 weeks', icon: <EllipsisVertical /> },
  { title: 'Conflict Resolution in the workspace', category: 'Soft skills', duration: '2 weeks', icon: <EllipsisVertical /> },
  { title: 'Digital Marketing Essentials', category: 'Marketing', duration: '3 weeks', icon: <EllipsisVertical /> },

];

const LearningAndDevelopment: React.FC = () => {
    const [tableData, setTableData] = useState<any>([])

useEffect(() => {
    console.log(tableData)
}, [tableData])


  return (
    <div>
      <h1 className={learningAndDev.title}>Learning and development</h1>

      <div className='px-5'>
                <Links dataTableDataOnClient={tableData} updataTableDataOnClient={setTableData} linkList={[{ name: 'All', endpoint: '/' },
                { name: 'Active', endpoint: '/' },
                { name: 'Draft', endpoint: '/' },
                { name: 'Closed', endpoint: '/' }]} />
            </div>
            <div className='px-5'>
                <Searchbar />
            </div>

      <div className="px-5 py-4">
      <Tables columns={columns} data={data} />
    </div>
    </div>
  );
};

export default LearningAndDevelopment;
