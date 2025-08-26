import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useRevenue } from "./RevenueContext";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GeoDistributionChart = () => {
  const { avodRevenue, tvodRevenue } = useRevenue();

  const labels = ["North America", "Europe", "Asia", "Latin America", "Africa"];
  const geoMultiplier = [0.3, 0.25, 0.2, 0.15, 0.1];

  const avodData = geoMultiplier.map((m) =>
    parseFloat((avodRevenue * m).toFixed(2))
  );
  const tvodData = geoMultiplier.map((m) =>
    parseFloat((tvodRevenue * m).toFixed(2))
  );

  const data = {
    labels,
    datasets: [
      {
        label: "AVOD Revenue",
        data: avodData,
        backgroundColor: "#facc15", // yellow-400
      },
      {
        label: "TVOD Revenue",
        data: tvodData,
        backgroundColor: "#fb923c", // orange-400
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#d1d5db", // text-gray-300
        },
      },
      tooltip: {
        backgroundColor: "#1F2937",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#d1d5db",
          callback: (value) => `$${value}`,
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      x: {
        ticks: {
          color: "#d1d5db",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-2xl hover:bg-white/10 transition-all duration-300 text-white">
      <h3 className="text-xl font-semibold text-white mb-4">
        Geographic Distribution
      </h3>
      <div className="h-[300px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GeoDistributionChart;
