import React from 'react'
'use client'
import { Bell, ChevronDown, Mail } from 'lucide-react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import Link from 'next/link'


export default function Header() {
  return (
    <div>
       <header className='flex gap-4 p-4 justify-between items-center bg-green-600'>
      <div>
        <h2 className='scroll-m-20 text-xl font-normal tracking-tight lg:text-xl'>Welcome back, Olajide</h2>
      </div>

      <div className='flex items-center me-3'>
        <div className='flex border-r border-black'>
          <Bell className='w-4 h-4 cursor-pointer' />
          <Mail className='w-4 h-4 ms-3 me-3 cursor-pointer' />
        </div>

        <div className='flex items-center ms-2 me-2'>
          <div>
            <Avatar className='w-7 h-7'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>O</AvatarFallback>
            </Avatar>
          </div>
          <div className='ms-2'>
            <p className='font-normal' style={{ fontSize: '12px' }}>Olajide oluwantoyin</p>
            <p className='font-light' style={{ fontSize: '10px' }}>Hr profile</p>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown className='w-4 h-4 ms-2 cursor-pointer' />
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>My Accounts</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Account 1</DropdownMenuItem>
                <DropdownMenuItem>Account 2</DropdownMenuItem>
                <DropdownMenuItem>Account 3</DropdownMenuItem>
                <Link href="/"><DropdownMenuItem>Logout</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

      </div>
    </header>

    </div>
  )
}
