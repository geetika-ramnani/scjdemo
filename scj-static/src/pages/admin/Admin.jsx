import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    navigate("/createuser");
  };
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo) navigate("/signin");
  }, [userInfo, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button
          onClick={handleCreateUser}
          className="px-6 py-3 rounded-md bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-semibold hover:brightness-110 transition duration-300"
        >
          Create User
        </button>
        <button
          onClick={() => {
            navigate("/viewusers");
          }}
          className="px-6 py-3 rounded-md bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-semibold hover:brightness-110 transition duration-300"
        >
          View Users
        </button>
      </div>
    </div>
  );
};

export default Admin;
