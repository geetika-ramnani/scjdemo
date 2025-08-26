import React, { useState, useEffect } from "react";
import RevenueChart from "./RevenueChart";
import { useRevenue } from "./RevenueContext";

const TVODRevenueCalculator = () => {
  const [transactions, setTransactions] = useState("");
  const [valuePerTransaction, setValuePerTransaction] = useState("");
  const [share, setShare] = useState("");

  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [monthlyRevenueHistory, setMonthlyRevenueHistory] = useState([]);

  const { updateTvod } = useRevenue();

  useEffect(() => {
    const t = parseFloat(transactions);
    const v = parseFloat(valuePerTransaction);
    const s = parseFloat(share);

    if (isNaN(t) || isNaN(v) || isNaN(s) || t <= 0 || v <= 0 || s <= 0) {
      setMonthlyRevenue(0);
      setAnnualRevenue(0);
      updateTvod(0);
      return;
    }

    const revenue3Month = t * v * (s / 100);
    const monthly = revenue3Month / 3;
    const annual = monthly * 12;

    setMonthlyRevenue(monthly.toFixed(2));
    setAnnualRevenue(annual.toFixed(2));
    updateTvod(monthly);

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
  }, [transactions, valuePerTransaction, share]);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-xl text-white hover:bg-white/10 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-6">TVOD Revenue Calculator</h3>

      {/* Transactions Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          3 Monthly Transactions
        </label>
        <input
          type="number"
          value={transactions}
          onChange={(e) => setTransactions(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-600 text-white rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-500"
          placeholder="Enter estimated 3-monthly transactions"
        />
      </div>

      {/* Average Transaction Value */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Average Transaction Value
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            $
          </span>
          <input
            type="number"
            value={valuePerTransaction}
            onChange={(e) => setValuePerTransaction(e.target.value)}
            className="w-full pl-8 pr-4 py-2 bg-transparent border border-gray-600 text-white rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-500"
            placeholder="Enter average transaction value"
          />
        </div>
      </div>

      {/* Revenue Share Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Revenue Share Percentage
        </label>
        <div className="relative">
          <input
            type="number"
            value={share}
            onChange={(e) => setShare(e.target.value)}
            className="w-full pr-8 pl-4 py-2 bg-transparent border border-gray-600 text-white rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-500"
            placeholder="Enter revenue share percentage"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            %
          </span>
        </div>
      </div>

      {/* Revenue Output */}
      <div className="pt-4 border-t border-white/10 mt-4">
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
        <RevenueChart
          data={monthlyRevenueHistory}
          title="TVOD Monthly Revenue Growth"
        />
      )}
    </div>
  );
};

export default TVODRevenueCalculator;
