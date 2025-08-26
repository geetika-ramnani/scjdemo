import React from "react";

export default function Step2Agreement({ updateForm, nextStep, prevStep }) {
  const pdfUrl = "/agreement.pdf"; // Put your agreement.pdf in `public/`

  const handleDecision = (decision) => {
    updateForm({ agreementStatus: decision });

    if (decision === "accept") {
      nextStep();
    } else if (decision === "request_changes") {
      alert("You have requested changes. A representative will contact you.");
      // Stay on the same step or exit
    } else if (decision === "deny") {
      alert("You declined the agreement. Exiting the form.");
      // Optionally redirect or stop here
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Step 2: Agreement</h2>

      <div className="h-[500px] border rounded overflow-hidden">
        <iframe
          src={pdfUrl}
          title="Agreement PDF"
          width="100%"
          height="100%"
          className="rounded"
        />
      </div>

      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
        >
          Back
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => handleDecision("request_changes")}
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
          >
            Request Changes
          </button>
          <button
            onClick={() => handleDecision("deny")}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Deny
          </button>
          <button
            onClick={() => handleDecision("accept")}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
