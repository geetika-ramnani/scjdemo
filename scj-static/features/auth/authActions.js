// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const backendURL = "http://localhost:5000";
// register endpoint
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}/api/users/register`,
        { name, email, password },
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

// login endpoint
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/users/login`,
        { email, password },
        config,
      );
      // store user's token in local storage
      localStorage.setItem("userToken", data.token);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          name: data.name,
          email: data.email,
          role: data.role,
        }),
      );
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
