import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';
import { Card } from './ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Green', 'Light Green'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [80, 20],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)', // Green
        'rgba(209, 250, 229, 0.8)' // Light Green
      ],
      hoverBackgroundColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(209, 250, 229, 1)'
      ],
      borderWidth: 2,
      borderColor: '#ffffff', // White border to create space between segments
    },
  ],
};

const Workingchart = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-64 h-64 flex flex-col items-center justify-center">
        <div className="relative w-full h-full">
          <Doughnut data={data} options={{ cutout: '70%' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
              {/* Position the percentage labels */}
              <div className="absolute text-white font-bold py-1 px-3 rounded"
                   style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>80%</div>
              <div className="absolute text-green-700 font-bold py-1 px-3 rounded"
                   style={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>20%</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Workingchart;
