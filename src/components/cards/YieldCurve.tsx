import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


type ChartData = {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string | ((context: any) => string | CanvasGradient);
    borderColor: string;
    tension: number;
  }[];
};

// type ChartOptions = {
//   responsive: boolean;
//   animation?: object;
//   maintainAspectRatio: boolean;
//   scales: {
//     x: {
//       beginAtZero: boolean;
//     };
//     y: {
//       beginAtZero: boolean;
//     };
//   };
// };

type ChartOptions = {
  responsive: boolean;
  animation?: object;
  elements?: object;
  plugins?: object;
  maintainAspectRatio: boolean;
  scales: object;
};

interface CurvedChartProps {
  data: ChartData;
  options: ChartOptions;
  toggleSwitch: boolean;
}

const CurvedChart = ({ data, options, toggleSwitch }: CurvedChartProps) => {
  const [showSwitch] = useState(toggleSwitch);

  return (
    <div className="relative">
      <div className="default-sans-serif h-full bg-transparent rounded-xl p-6">
        <Line data={data} options={options} className="h-[200px] md:h-[400px] !w-full" />
      </div>
      {showSwitch && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 m-4">
          <button
            className={`w-14 md:w-16 border  border-r-0 border-temporal px-0 md:px-2 py-0  transition  rounded-l-lg duration-500 ease-in-out bg-teal-900/10 text-[10px] text-gray-400 cursor-not-allowed`}
            style={{ pointerEvents: 'none' }}
          >
            YIELD
          </button>
          <button
            className={`w-14 md:w-16 border border-l-0 border-temporal px-0 md:px-2 py-0  rounded-r-lg transition duration-500 ease-in-out text-[10px] text-white cursor-not-allowed`}
            style={{
              backgroundImage: 'linear-gradient(to left,  #005B5B , #002C3C)',
              pointerEvents: 'none'
            }}
          >
            PRINCIPAL
          </button>
        </div>
      )}
    </div>
  );
};

export default CurvedChart;
