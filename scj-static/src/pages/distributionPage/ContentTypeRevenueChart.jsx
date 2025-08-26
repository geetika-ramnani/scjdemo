import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useRevenue } from "./RevenueContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const ContentTypeRevenueChart = () => {
  const { avodRevenue, tvodRevenue } = useRevenue();

  const data = {
    labels: ["AVOD", "TVOD"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [avodRevenue, tvodRevenue],
        backgroundColor: ["#facc15", "#fb923c"], // yellow-400, orange-400
        borderColor: ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#d1d5db", // text-gray-300
        },
      },
      tooltip: {
        backgroundColor: "#1F2937", // gray-800
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        padding: 10,
      },
    },
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-md hover:bg-white/10 transition-all duration-300 text-white">
      <h3 className="text-xl font-semibold text-white mb-4">
        Revenue by Content Type
      </h3>
      <div className="h-[300px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ContentTypeRevenueChart;
