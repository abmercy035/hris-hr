'use client'
import React, { useEffect, useState } from 'react';

interface linksProps {
  updataTableDataOnClient: (arg: Array<object>) => void;
  dataTableDataOnClient: any[];
  linkList: linksListProps[];
}


interface linksListProps {
  name: string;
  endpoint: string;
}

export default function Linked({ dataTableDataOnClient, updataTableDataOnClient, linkList }: linksProps) {


  const linksData = [...linkList];

  const [activeLink, setActiveLink] = useState<any>(linksData[0].name);

  useEffect(() => {
    updataTableDataOnClient(dataTableDataOnClient)
  }, [])

  const fetchTableDataFromServer = (endpoint: string, name: string) => {
    setActiveLink(name)
    if (name === "All") updataTableDataOnClient(dataTableDataOnClient)
    else updataTableDataOnClient(dataTableDataOnClient.filter(item => item.status === name))

    // fetch coressponding data and update table with data
    /*  eg 
     fetchTableData('/api/recruitment/applicant/?active')
     .then(response => response.json())
     Note: data is array of objects;
     .then(data => updataTableDataOnClient(data))
     .catch(error => console.error('Error:', error));
     */
    // demo use case
    fetch(`apibaseurl.com/${endpoint}`)
      .then(res => res.json())
      .then(data => updataTableDataOnClient([{ one: 1, two: 2 }]))

    // updataTableDataOnClient()
  }


  // eslint-disable-next-line @next/next/no-async-client-component
  return (
    <div className='pt-2 ms-2 pb-2'>
      <div className="flex space-x-4 border-b-2 border-gray-300 me-8">
        {linksData.map((link, index) => (
          <span
            key={index}
            // onClick={() => setActiveLink(link.name)}
            onClick={() => fetchTableDataFromServer(link.endpoint, link.name)}
            className={`relative text-black no-underline pb-2 cursor-pointer  ${activeLink === link.name ? 'active-link' : ''}`}
          >
            {link.name}
            {activeLink === link.name && (
              <span className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-green-500"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
