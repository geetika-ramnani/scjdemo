import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import adminReducer from "../features/admin/adminSlice";
import { authApi } from "../services/auth/authService";
import { adminApi } from "../services/admin/adminService";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(adminApi.middleware),
});
