import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserDetailsQuery } from "../../services/auth/authService";
import { setCredentials } from "../../features/auth/authSlice";

function ProtectedRoutes({ allowedRoles }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
    pollingInterval: 900000, // perform refetch after some duration (in milliseconds)
  });

  // modifying redux state.userInfo
  useEffect(() => {
    if (data) dispatch(setCredentials(data.user));
  }, [data, dispatch]);
  if (!userInfo) {
    return <Navigate to="/signin" />;
  }

  if (!allowedRoles.includes(userInfo.role)) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
