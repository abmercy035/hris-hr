'use client'
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Card } from './ui/card';
import { Dot } from 'lucide-react';
import Workingchart from './Workingchart';
import type { ChartOptions } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface YearlyData {
  [year: number]: number[];
}
const BarChart = () => {
  const [selectedYear, setSelectedYear] = useState(2021);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: `Dataset for ${selectedYear}`,
        data: getDataForYear(selectedYear),
        backgroundColor: '#5AB579',
        borderColor: '#5AB579',
        borderWidth: 1,
        borderRadius: 4, // Rounded corners
        barThickness: 10, // Slim bars
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart fits the container's height
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Chart.js Bar Chart for ${selectedYear}`,
      },
    },
  };

  function getDataForYear(year: number) {
    // Replace this with your actual data logic
    const yearlyData: YearlyData = {
      2021: [65, 59, 80, 81, 56, 55, 40, 80, 74, 28, 66, 99],
      2020: [45, 79, 50, 61, 76, 75, 60, 90, 54, 38, 76, 89],
      2019: [25, 49, 70, 91, 66, 85, 50, 70, 64, 18, 56, 79],
      2018: [35, 39, 60, 71, 86, 95, 30, 60, 84, 48, 36, 69],
    };
    return yearlyData[year] || [];
  }

  return (
    <div className='flex justify-between'>

      <Card className="w-[610px] h-[500px] p-4">
        <div className='flex justify-between items-center p-3 py-3'>
          <h2 className='font-semibold'>Attendance Overview</h2>

          <div className='flex items-center'>
            <div className='flex'>
              <Dot className='text-blue-800' />
              <p>Ontime</p>
            </div>
            <div className='flex'>
              <Dot className='text-gray-500' />
              <p>Late</p>
            </div>
            <div className='flex'>
              <Dot className='text-red-700' />
              <p>Absent</p>
            </div>
          </div>

          <div>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="w-16 p-1 text-base bg-gray-200 sm:text-sm"
            >
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
            </select>
          </div>

        </div>

        <div className="h-[410px]">
          <Bar data={data} options={options} />
        </div>
      </Card>


      {/* PIE CHART AREA */}
      <div className=''>
        <Workingchart />
      </div>

    </div>
  );
};

export default BarChart;
