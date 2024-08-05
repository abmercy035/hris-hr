import React from 'react'
import { Input } from '../ui/input'
import { ListFilter, Search } from 'lucide-react'
import { Button } from '../ui/button'

export default function Searchbar() {
  return (
    <div>
      <div className="flex justify-between items-center p-2 me-8">
      <div className="relative w-72">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-500" />
        </div>
        <Input
          className="w-full pl-10"
          type="search"
          placeholder="Search by Job title, department..."
        />
      </div>
      <div>
        <Button variant="outline">
          <ListFilter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>
    </div>

    </div>
  )
}
