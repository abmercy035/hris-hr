import React, { useEffect, useState } from 'react';
import { AllPagination } from "./Pagination";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Modal from '@/app/components/recruitment/Modal';
import Trainingdetails from './Trainingdetails';
import PercentageBar from '../performance/PercentageBar';

interface Column {
  header: string;
  key: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [paginations, setPaginations] = useState(1);
  const paginationsRange = 10;
  const paginationsMax = paginationsRange * paginations;
  const paginationsMin = paginationsMax - paginationsRange;

  console.log(paginations > data.length / paginationsRange);

  useEffect(() => {
    setPaginations(1);
  }, [data]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 table-fixed">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column, index) => (
              <th 
                key={column.key} 
                className="py-4 px-6 border-b border-gray-200 text-left text-gray-500 text-sm font-normal"
                style={{ 
                  width: index === columns.length - 1 ? '50px' : `${(100 - 5) / (columns.length - 1)}%` 
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr onClick={openModal} key={index} className="hover:bg-gray-100">
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                  <Trainingdetails />
                </div>
              </Modal>
              {columns.map((column, colIndex) => (
                <td 
                  key={column.key} 
                  className="py-4 px-6 border-b border-gray-200 text-sm text-gray-700"
                  style={{ 
                    width: colIndex === columns.length - 1 ? '50px' : `${(100 - 5) / (columns.length - 1)}%` 
                  }}
                >
                  {column.key === 'percentage' ? (
                    <PercentageBar percentage={row[column.key]} />
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-200">
          <tr>
            <td colSpan={columns.length} className="py-4 px-6 border-t border-gray-200 text-center text-gray-500 text-sm font-normal">
              <div className="flex justify-between">
                {paginations > 1 && (
                  <button 
                    onClick={() => setPaginations(prev => prev - 1)} 
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <span>Prev</span>
                    <ArrowLeft className="ml-2 h-5 w-5 text-gray-700" />
                  </button>
                )}
                <AllPagination gotoPage={setPaginations} currentPage={paginations} dataLength={data?.length} />
                {(paginations < (data.length / paginationsRange)) && (
                  <button 
                    onClick={() => setPaginations(prev => prev + 1)} 
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <span>Next</span>
                    <ArrowRight className="ml-2 h-5 w-5 text-gray-700" />
                  </button>
                )}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DataTable;
