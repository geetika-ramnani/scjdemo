import React, { useState, useEffect } from "react";
import RevenueChart from "./RevenueChart";
import { useRevenue } from "./RevenueContext";

const AVODRevenueCalculator = () => {
  const [period, setPeriod] = useState("monthly");
  const [views, setViews] = useState("");
  const [cpm, setCpm] = useState("");
  const [share, setShare] = useState("");

  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [monthlyRevenueHistory, setMonthlyRevenueHistory] = useState([]);

  const { updateAvod } = useRevenue();

  useEffect(() => {
    const v = parseFloat(views);
    const c = parseFloat(cpm);
    const s = parseFloat(share);

    if (isNaN(v) || isNaN(c) || isNaN(s) || v <= 0 || c <= 0 || s <= 0) {
      setMonthlyRevenue(0);
      setAnnualRevenue(0);
      updateAvod(0);
      return;
    }

    const revenuePerPeriod = (v / 1000) * c * (s / 100);
    const monthly =
      period === "monthly" ? revenuePerPeriod : revenuePerPeriod / 3;
    const annual = monthly * 12;

    setMonthlyRevenue(monthly.toFixed(2));
    setAnnualRevenue(annual.toFixed(2));
    updateAvod(monthly);

    const newPoint = {
      month: `Month ${monthlyRevenueHistory.length + 1}`,
      revenue: parseFloat(monthly.toFixed(2)),
    };

    if (!isNaN(newPoint.revenue)) {
      setMonthlyRevenueHistory((prev) => {
        if (
          prev.length > 0 &&
          prev[prev.length - 1].revenue === newPoint.revenue
        ) {
          return prev;
        }
        return [...prev.slice(-11), newPoint];
      });
    }
  }, [views, cpm, share, period]);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-xl text-white hover:bg-white/10 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-6">
        AVOD Revenue Calculator
      </h3>

      {/* Period Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Transaction Period
        </label>
        <div className="flex gap-4">
          {["monthly", "quarterly"].map((value) => (
            <label
              key={value}
              className="flex items-center text-gray-300 text-sm"
            >
              <input
                type="radio"
                name="avodPeriod"
                value={value}
                checked={period === value}
                onChange={() => setPeriod(value)}
                className="mr-2 text-blue-500 focus:ring-0"
              />
              {value === "monthly" ? "Monthly" : "3 Monthly"}
            </label>
          ))}
        </div>
      </div>

      {/* Views Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Views per Period
        </label>
        <input
          type="number"
          value={views}
          onChange={(e) => setViews(e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none text-white placeholder-gray-400"
          placeholder="Enter estimated views per period"
        />
      </div>

      {/* CPM Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Average CPM (Cost Per Mille)
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            $
          </span>
          <input
            type="number"
            value={cpm}
            onChange={(e) => setCpm(e.target.value)}
            className="w-full pl-8 pr-4 py-2 bg-white/10 border border-white/20 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none text-white placeholder-gray-400"
            placeholder="Enter CPM rate"
          />
        </div>
      </div>

      {/* Revenue Share */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Revenue Share Percentage
        </label>
        <div className="relative">
          <input
            type="number"
            value={share}
            onChange={(e) => setShare(e.target.value)}
            className="w-full pl-4 pr-8 py-2 bg-white/10 border border-white/20 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none text-white placeholder-gray-400"
            placeholder="Enter revenue share percentage"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            %
          </span>
        </div>
      </div>

      {/* Revenue Output */}
      <div className="pt-4 border-t border-white/10 mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300">
            Estimated Monthly Revenue:
          </span>
          <span className="text-xl font-bold text-green-400">
            ${monthlyRevenue}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-300">
            Estimated Annual Revenue:
          </span>
          <span className="text-xl font-bold text-green-400">
            ${annualRevenue}
          </span>
        </div>
      </div>

      {/* Revenue Growth Chart */}
      {monthlyRevenueHistory.length > 1 && (
        <div className="mt-6">
          <RevenueChart
            data={monthlyRevenueHistory}
            title="AVOD Monthly Revenue Growth"
          />
        </div>
      )}
    </div>
  );
};

export default AVODRevenueCalculator;
