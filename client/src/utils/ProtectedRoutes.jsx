import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes({ allowedRoles }) {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to="/signin" />;
  }

  if (!allowedRoles.includes(userInfo.role)) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;

