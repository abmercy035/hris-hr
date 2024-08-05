'use client'
import { Command, CommandGroup, CommandItem, CommandList } from 'cmdk'
import { User, ChevronDown, Settings } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import React from 'react'

export default function Sidebarfooter() {
  const menuList = [
    {
      group: "",
      items: [
        {
          link: '/',
          icon: <User className="w-4 h-4" />,
          text: 'Profile',
          arrow: <ChevronDown className="w-3 h-3" />
        },
        {
          link: '/',
          icon: <Settings className="w-4 h-4" />,
          text: 'Setting',
          arrow: <ChevronDown className="w-3 h-3" />
        },

      ]
    }
  ];

  return (
    <div className=''>
      <div className='w-full'>
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group} className="">
                {menu.items.map((option, optionKey) => (
                  <CommandItem
                    key={optionKey}
                    className='flex items-center justify-between mb-3 gap-10 text-md cursor-pointer p-2 rounded hover:bg-[#148359] w-full'
                  >
                    <div className='flex items-center gap-2'>
                      {option.icon}
                      {option.text}
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger> {option.arrow}</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Dropdown1</DropdownMenuItem>
                        <DropdownMenuItem>Dropdown2</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  )
}
