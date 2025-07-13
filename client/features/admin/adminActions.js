import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const backendURL = "http://localhost:5000";
// register endpoint
export const createUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password, role }, { rejectWithValue, getState }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getState().auth.userToken}`,
        },
      };
      await axios.post(
        `${backendURL}/api/admin/createuser`,
        { name, email, password, role },
        config,
      );
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
