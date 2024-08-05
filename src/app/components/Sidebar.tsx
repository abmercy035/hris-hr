'use client';
import { BriefcaseBusiness, ChevronDown, LayoutDashboard, Settings, User } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "@/styles/sidebar.module.css"

export default function Sidebar() {
    const [openSubmenus, setOpenSubmenus] = useState<any>({});
    const [activeMenus, setActiveMenus] = useState("Dashboard");

    const toggleSubmenu = (index: number, title: string) => {
        setActiveMenus(title);
        setOpenSubmenus((prevState: any) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };
    const Menus = [
        { title: "Dashboard", link: "/", icon: <LayoutDashboard className='w-4 h-4' /> },
        {
            title: "Employee",
            submenu: true,
            submenuItems: [
                {
                    title: "All Employees",
                    link: '/employee/all-employees'
                },
                {
                    title: "Leave Managment",
                    link: '/employee/leave-management'
                },
                {
                    title: "Payroll Information",
                    link: '/employee/payroll-information'
                },
            ],
            icon: <User className='w-4 h-4' />
        },
        {
            title: "Recruitment",
            submenu: true,
            submenuItems: [
                {
                    title: "Job Posting",
                    link: '/recruitment/job-posting'
                },
                {
                    title: "Applicant tracking",
                    link: '/recruitment/applicant-tracking'

                },
                {
                    title: "Interview Schedule",
                    link: '/recruitment/scheduling'
                },
            ],
            icon: <BriefcaseBusiness className='w-4 h-4' />
        },
        {
            title: "Organisation",
            submenu: true,
            submenuItems: [
                { title: "Submenu 1", link: '/recruitment/scheduling' },
                { title: "Submenu 2", link: '/recruitment/scheduling' },
                { title: "Submenu 3", link: '/recruitment/scheduling' },
            ],
            icon: <BriefcaseBusiness className='w-4 h-4' />
        },
        {
            title: "Performance",
            submenu: true,
            submenuItems: [
                {
                    title: "Goal Setting and tracking",
                    link: "goal-setting-tracking",
                },
                { title: "Learning and development" },
                { title: "Feedback" },
            ],
            icon: <BriefcaseBusiness className='w-4 h-4' />
        },
        {
            title: "Compliance",
            submenu: true,
            submenuItems: [
                { title: "Submenu 1", link: '/recruitment/scheduling' },
                { title: "Submenu 2", link: '/recruitment/scheduling' },
                { title: "Submenu 3", link: '/recruitment/scheduling' },
            ],
            icon: <BriefcaseBusiness className='w-4 h-4' />
        },
        {
            title: "Profile",
            submenu: true,
            submenuItems: [
                { title: "Submenu 1", link: '/recruitment/scheduling' },
                { title: "Submenu 2", link: '/recruitment/scheduling' },
                { title: "Submenu 3", link: '/recruitment/scheduling' },
            ],
            spacing: true, icon: <User className='w-4 h-4' />
        },
        {
            title: "Setting",
            submenu: true,
            submenuItems: [
                {
                    title: "Log out",
                    link: '/login'
                }
            ],
            icon: <Settings className='w-4 h-4' />
        },
    ];

    return (
        <div className={styles.sidebar_wrapper}>
            <div className='bg-[#EEEDFD] h-full p-5 pt-12 w-full'>
                <div className='pt-2'>
                    {(Menus).map((menu, index) => (
                        <React.Fragment key={index}>
                            <Link href={menu?.link ?? "#"}
                                className={`text-black text-sm flex items-center justify-between gap-x-4 cursor-pointer p-4 
                                hover:bg-[#148359] hover:text-white rounded-md ${menu?.spacing ? "mt-9" : "mt-4"} 
                                ${activeMenus == menu?.title ? "bg-[#148359] text-white" : ""}`}
                                onClick={() => toggleSubmenu(index, menu?.title)}
                            >
                                <div className='flex items-center gap-x-4'>
                                    <span className='text-xl block float-left'>
                                        {menu?.icon}
                                    </span>
                                    <div>{menu?.title}</div>
                                </div>
                                {menu?.submenu && (
                                    <ChevronDown
                                        className={`${openSubmenus[index] && "rotate-180"} w-4 h-4`}
                                    />
                                )}
                            </Link>
                            {menu?.submenu && openSubmenus[index] && (
                                <div>
                                    {menu?.submenuItems.map((submenuItem, submenuIndex) => (
                                        <Link href={submenuItem?.link ?? "/"} key={submenuIndex} className='text-dark text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md'>
                                            {submenuItem.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
