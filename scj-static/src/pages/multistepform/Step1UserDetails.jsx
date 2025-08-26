import React, { useState } from "react";

export default function Step1UserDetails({ formData, updateForm, nextStep }) {
  const [localData, setLocalData] = useState({
    name: formData.name || "",
    age: formData.age || "",
    company: formData.company || "",
    address: formData.address || "",
  });

  const handleChange = (e) => {
    setLocalData({
      ...localData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    updateForm(localData); // send data up to parent
    nextStep(); // move to step 2
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Your Details</h2>
      <form onSubmit={handleNext} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            value={localData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            name="age"
            type="number"
            value={localData.age}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            name="company"
            type="text"
            value={localData.company}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            name="address"
            value={localData.address}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

