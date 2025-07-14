import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { BarChart3, Film, DollarSign } from "lucide-react";
import { useRevenue } from "./RevenueContext";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const ContentPerformanceDashboard = () => {
  const { avodRevenue, tvodRevenue } = useRevenue();
  const stats = [
    {
      title: "AVOD Revenue",
      value: `$${avodRevenue.toFixed(2)}`,
      change: "+15.2%",
      icon: <Film className="text-yellow-400" />,
      sparkline: [2000, 3400, 2800, 4000, 5000, 6000, avodRevenue],
    },
    {
      title: "TVOD Revenue",
      value: `$${tvodRevenue.toFixed(2)}`,
      change: "+10.5%",
      icon: <BarChart3 className="text-blue-400" />,
      sparkline: [1800, 2000, 2500, 3000, 3600, 4200, tvodRevenue],
    },
    {
      title: "Total Revenue",
      value: `$${(avodRevenue + tvodRevenue).toFixed(2)}`,
      change: "+12.9%",
      icon: <DollarSign className="text-green-400" />,
      sparkline: [
        3800,
        5400,
        5300,
        7000,
        8600,
        10200,
        avodRevenue + tvodRevenue,
      ],
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
          <span className="text-white">Content&nbsp;</span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Performance
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
          Track and analyze your content's performance across different
          distribution models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-white">{stat.title}</h3>
              <div className="text-2xl">{stat.icon}</div>
            </div>

            <div className="text-2xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="flex items-center text-sm text-green-400 mb-4">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span>{stat.change} vs last month</span>
            </div>

            <div className="h-[100px]">
              <Line
                data={{
                  labels: stat.sparkline.map((_, i) => i + 1),
                  datasets: [
                    {
                      data: stat.sparkline,
                      borderColor: "#f59e0b", // amber-500
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                      tension: 0.4,
                      fill: true,
                      pointRadius: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  elements: {
                    line: { borderWidth: 2 },
                  },
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      mode: "index",
                      intersect: false,
                      backgroundColor: "#1F2937", // gray-800
                      titleColor: "#fff",
                      bodyColor: "#fff",
                      padding: 10,
                    },
                  },
                  scales: {
                    x: { display: false },
                    y: { display: false },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPerformanceDashboard;
