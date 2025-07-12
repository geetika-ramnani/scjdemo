import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../../features/auth/authSlice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    // Automatically logout on 401 Unauthorized
    console.warn("Token expired, logging out...");
    api.dispatch(logout());
  }

  return result;
};
