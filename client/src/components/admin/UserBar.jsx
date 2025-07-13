import React from "react";

const UserBar = ({ id, name, email, role, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-3 rounded-lg shadow-md mb-2 hover:bg-gray-700 transition">
      {/* User Info Section */}
      <div className="flex-1 grid grid-cols-4 gap-4 text-sm">
        <div className="truncate">ID: {id}</div>
        <div className="truncate">Name: {name}</div>
        <div className="truncate">Email: {email}</div>
        <div className="truncate">Role: {role}</div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3 ml-4">
        <button
          onClick={onEdit}
          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-xs transition-all duration-200"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-xs transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserBar;
