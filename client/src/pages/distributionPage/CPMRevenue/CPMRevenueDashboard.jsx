import React, { useState } from "react";
import RevenueDistributionBreakdown from "./RevenueDistributionBreakdown";
import CPMSummaryCard from "./CPMSummaryCard";

const CPMRevenueDashboard = () => {
  const [inputs, setInputs] = useState({
    impressions: "",
    cpm: "",
    ssaiCost: "",
    cdnCost: "",
  });

  const [results, setResults] = useState(null);

  const handleChange = (field) => (e) => {
    setInputs((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const calculateRevenue = () => {
    const { impressions, cpm, ssaiCost, cdnCost } = inputs;
    const imp = parseFloat(impressions);
    const costPerMile = parseFloat(cpm);
    const ssai = parseFloat(ssaiCost) || 0;
    const cdn = parseFloat(cdnCost) || 0;

    if (isNaN(imp) || isNaN(costPerMile) || imp <= 0 || costPerMile <= 0) {
      alert("Please enter valid numeric values for Impressions and CPM.");
      return;
    }

    const gross = (imp / 1000) * costPerMile;
    const deductions = ssai + cdn;
    const net = gross - deductions;

    const platformShare = net * 0.5;
    const yourGross = net * 0.4;
    const tds = yourGross * 0.05;
    const yourFinal = yourGross - tds;
    const scjShare = net * 0.1;

    setResults({
      impressions: imp,
      cpm: costPerMile,
      grossTotal: gross.toFixed(2),
      netRevenue: net.toFixed(2),
      platformShare: platformShare.toFixed(2),
      yourShare: yourFinal.toFixed(2),
      scjShare: scjShare.toFixed(2),
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">CPM Revenue Dashboard</h2>

      {/* Input + Summary Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300">
          <h3 className="text-lg font-semibold mb-4">Enter Revenue Details</h3>

          <InputField
            label="Impressions"
            value={inputs.impressions}
            onChange={handleChange("impressions")}
          />
          <InputField
            label="CPM (Cost per Mille)"
            value={inputs.cpm}
            onChange={handleChange("cpm")}
            prefix="$"
          />
          <InputField
            label="SSAI Cost"
            value={inputs.ssaiCost}
            onChange={handleChange("ssaiCost")}
            prefix="$"
          />
          <InputField
            label="CDN Cost"
            value={inputs.cdnCost}
            onChange={handleChange("cdnCost")}
            prefix="$"
          />

          <button
            onClick={calculateRevenue}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Calculate Revenue
          </button>
        </div>

        {results && <CPMSummaryCard {...results} />}
      </div>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevenueDistributionBreakdown netRevenue={results.netRevenue} />
        </div>
      )}
    </div>
  );
};

const InputField = ({ label, value, onChange, prefix }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={value}
        onChange={onChange}
        className={`w-full ${
          prefix ? "pl-8" : "pl-4"
        } pr-4 py-2 bg-transparent border border-gray-600 text-white rounded focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </div>
);

export default CPMRevenueDashboard;
