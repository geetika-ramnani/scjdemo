import React from "react";

const RevenueDistributionBreakdown = ({ netRevenue }) => {
  const net = parseFloat(netRevenue) || 0;

  // Constants (declared clearly for easy config changes later)
  const PLATFORM_PERCENT = 50;
  const YOUR_PERCENT = 40;
  const SCJ_PERCENT = 10;
  const TDS_PERCENT = 5;

  // Revenue breakdown calculations
  const platformShare = (net * PLATFORM_PERCENT) / 100;
  const yourGrossShare = (net * YOUR_PERCENT) / 100;
  const tds = (yourGrossShare * TDS_PERCENT) / 100;
  const yourFinalShare = yourGrossShare - tds;
  const scjShare = (net * SCJ_PERCENT) / 100;

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg w-full max-w-xl mt-6 text-white">
      <h3 className="text-xl font-semibold mb-4 text-white">
        Revenue Distribution Summary
      </h3>

      <div className="space-y-3 text-sm text-gray-300">
        <ResultRow label="Net Revenue" value={`$${net.toFixed(2)}`} />
        <ResultRow
          label={`Platform Share (${PLATFORM_PERCENT}%)`}
          value={`$${platformShare.toFixed(2)}`}
        />
        <ResultRow
          label={`SCJ Entertainment (${SCJ_PERCENT}%)`}
          value={`$${scjShare.toFixed(2)}`}
        />
        <ResultRow
          label={`Your Gross Share (${YOUR_PERCENT}%)`}
          value={`$${yourGrossShare.toFixed(2)}`}
        />
        <ResultRow
          label={`TDS Deduction (${TDS_PERCENT}% on your share)`}
          value={`-$${tds.toFixed(2)}`}
        />
        <hr className="border-gray-700" />
        <ResultRow
          label="Your Final Share"
          value={`$${yourFinalShare.toFixed(2)}`}
          bold
          highlight
        />
      </div>
    </div>
  );
};

// Internal helper component (not exported, scoped to file)
const ResultRow = ({ label, value, bold = false, highlight = false }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm">{label}</span>
    <span
      className={`${highlight ? "text-green-400" : "text-white"} ${
        bold ? "font-semibold text-base" : "text-sm font-medium"
      }`}
    >
      {value}
    </span>
  </div>
);

export default RevenueDistributionBreakdown;
