import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";
import { ArrowLeft, ArrowRight, EllipsisVertical } from "lucide-react";
import { AllPagination } from "./Pagination";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface dataTableProps {
  tableHead: any[];
  tableData: any[];
}


export function Datatable({ tableHead, tableData }: dataTableProps) {
  const [paginations, setPaginations] = useState(1)
  const paginationsRange = 10;
  const paginationsMax = paginationsRange * paginations;
  const paginationsMin = paginationsMax - paginationsRange;
  console.log(paginations > tableData.length / paginationsRange)
  const router = useRouter()
  const showInterviewStatus = (route) => {
    router.push("scheduling/interview-status")
  }
  useEffect(() => {
    setPaginations(1)
  }, [tableData])
  return (
    <Table className="border border-gray-300 rounded-lg p-3 pt-2">
      <TableHeader className="bg-gray-200">
        <TableRow>
          {tableHead.map((title, index) => <TableHead key={index}>{title}</TableHead>)}
          <TableHead className="w-[80px] bg-gray-200"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((invoice, index) => {
          if (index > paginationsMin && index < paginationsMax) return (
            <TableRow key={index} onClick={() => showInterviewStatus(invoice.invoice)}>
              <TableCell className="font-medium"  >{invoice.invoice}</TableCell>
              <TableCell className="font-medium">{invoice.department}</TableCell>
              <TableCell>
                <button
                  className={`py-1 px-3 rounded ${invoice.employmentType === "Full Time"
                    ? "bg-green-200 text-green-700"
                    : invoice.employmentType === "Part Time"
                      ? "bg-blue-200 text-blue-700"
                      : invoice.employmentType === "Contract"
                        ? "bg-amber-300 text-amber-700"
                        : ""
                    }`}
                >
                  {invoice.employmentType}
                </button>
              </TableCell>
              <TableCell>
                <button
                  className={`py-1 px-3 rounded ${(invoice.status === "Active" || invoice.status === "Completed" || invoice.status === "Offer Mode")
                    ? "bg-green-200 text-green-700"
                    : (invoice.status === "Closed" || invoice.status === "Rejected" || invoice.status === "Cancelled")
                      ? "bg-red-200 text-red-700"
                      : (invoice.status === "Draft" || invoice.status === "Under Review" || invoice.status === "Scheduled")
                        ? "bg-orange-200 text-orange-700"
                        : (invoice.status === "New")
                          ? "bg-blue-200 text-blue-700"
                          : ""
                    }`}
                >
                  {invoice.status}
                </button>
              </TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell className="text-right"><EllipsisVertical className="w-5 h-5" /></TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan="6">
            <div className="flex justify-between">
              {paginations > 1 && <button onClick={() => setPaginations(prev => prev - 1)} className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span>Prev</span>
                <ArrowLeft className="ml-2 h-5 w-5 text-gray-700" />
              </button>}
              <AllPagination gotoPage={setPaginations} currentPage={paginations} dataLength={tableData?.length} />
              {(paginations < (tableData.length / paginationsRange)) && <button onClick={() => setPaginations(prev => prev + 1)} className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span>Next</span>
                <ArrowRight className="ml-2 h-5 w-5 text-gray-700" />
              </button>}
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table >
  );
}
