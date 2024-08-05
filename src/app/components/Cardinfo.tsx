'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react"
import React from 'react'

export default function Cardinfo() {
  return (
    <div>
      <div className="grid gap-3 mt-5 me-9 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Employees
            </CardTitle>
            <div className="flex bg-[#5AB579] p-1 rounded-sm">
              <TrendingUp className="h-3 w-3 text-black" />
              <p className="text-xs opacity-100">10.0%</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <p className="text-xs text-muted-foreground">
              Employee
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Employees
            </CardTitle>
            <div className="flex bg-[#E26E6A] p-1 rounded-sm">
              <TrendingDown className="h-3 w-3 text-black" />
              <p className="text-xs opacity-100">7.0%</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              Employee
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Job View
            </CardTitle>
            <div className="flex bg-[#5AB579] p-1 rounded-sm">
              <TrendingUp className="h-3 w-3 text-black " />
              <p className="text-xs opacity-100">22.0%</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,342</div>
            <p className="text-xs text-muted-foreground">
              Viewers
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Job Applied
            </CardTitle>
            <div className="flex bg-[#5AB579] p-1 rounded-sm">
              <TrendingUp className="h-3 w-3 text-black " />
              <p className="text-xs opacity-100">22.0%</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">77</div>
            <p className="text-xs text-muted-foreground">
              Applicants
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
