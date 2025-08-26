import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = ({ data, title }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mt-6 hover:bg-white/10 transition-all duration-300 text-white">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#d1d5db", fontSize: 12 }}
            axisLine={{ stroke: "#ffffff20" }}
            tickLine={{ stroke: "#ffffff20" }}
          />
          <YAxis
            tick={{ fill: "#d1d5db", fontSize: 12 }}
            axisLine={{ stroke: "#ffffff20" }}
            tickLine={{ stroke: "#ffffff20" }}
            tickFormatter={(v) => `$${v}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            formatter={(v) => `$${v}`}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10B981" // emerald-500
            strokeWidth={3}
            dot={{ r: 4, stroke: "#10B981", fill: "#10B981" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
