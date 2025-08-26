import React, { useState } from "react";

export default function Step3Confirmation({ prevStep, onComplete }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = () => {
    if (!selectedOption) {
      alert("Please select an option.");
      return;
    }
    onComplete(selectedOption);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Step 3: Delivery Method</h2>

      <div className="space-y-4">
        <div
          onClick={() => setSelectedOption("dashboard")}
          className={`border p-4 rounded cursor-pointer ${
            selectedOption === "dashboard"
              ? "border-green-500 bg-green-50"
              : "border-gray-300"
          }`}
        >
          <h3 className="font-bold">🖥️ Dashboard Access (5% extra)</h3>
          <p className="text-sm text-gray-600">
            You’ll get access to a full dashboard with real-time metrics and
            management tools.
          </p>
        </div>

        <div
          onClick={() => setSelectedOption("physical")}
          className={`border p-4 rounded cursor-pointer ${
            selectedOption === "physical"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <h3 className="font-bold">📄 Physical Report System</h3>
          <p className="text-sm text-gray-600">
            You will not get a dashboard. Reports will be mailed or emailed to
            you manually.
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
