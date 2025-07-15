import React, { useState, useEffect } from "react";

//redux related imports
import { useSelector, useDispatch } from "react-redux";
import { modifyUser } from "../../../features/admin/adminActions";
const EditUserModal = ({ user, onClose }) => {
  // redux state.admin
  const { loading, error, success } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    // password: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        // password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirm = window.confirm(
      "Are you sure you want to make these changes?",
    );
    if (!confirm) return;
    const updatedUser = {
      ...formData,
      email: user.email, // Ensure email is consistent (if you don't allow email edit)
    };
    dispatch(modifyUser(updatedUser));
  };

  // successful edit message
  useEffect(() => {
    if (success) {
      alert("user Modified Successfully");
      window.location.reload();
    }
  }, [success]);

  // failed edit message
  useEffect(() => {
    if (error) {
      alert(`${error}`);
    }
  }, [error]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email (read-only)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded opacity-60 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
              required
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* <div>
            <label className="block text-sm mb-1">Password (optional)</label>
            <input
              type="password"
              name="password"
              placeholder="Leave blank to keep current password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div> */}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Close X icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default EditUserModal;
