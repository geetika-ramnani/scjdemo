import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// redux related imports
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../features/admin/adminActions"; // Make sure to define this action

const CreateUser = () => {
  const navigate = useNavigate();
  // redux state.admin variables
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.admin);

  const emptyFieldObj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const [formData, setFormData] = useState(emptyFieldObj);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // redux createuser action
    dispatch(
      createUser({
        name: formData.firstName + " " + formData.lastName,
        email: formData.email.toLowerCase(),
        password: formData.password,
        role: formData.role,
      }),
    );
  };

  // successful user creation message
  useEffect(() => {
    if (success) {
      alert("User creation successful");
      window.location.reload();
    }
  }, [success]);

  // failed user creation message
  useEffect(() => {
    if (error) {
      alert(`${error}`);
      // setFormData(emptyFieldObj);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Create New User
        </h2>

        {/* Name fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-300 text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input-style bg-white"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input-style bg-white"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-gray-300 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-style bg-white"
            placeholder="user@example.com"
            required
          />
        </div>

        {/* Role */}
        <div>
          <label className="text-gray-300 text-sm">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="input-style bg-white"
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <label className="text-gray-300 text-sm">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-style bg-white"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-gray-300 text-sm">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="input-style bg-white"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
