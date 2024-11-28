import { createAsyncThunk } from "@reduxjs/toolkit";

// Simulate API call for login
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userId, { rejectWithValue }) => {
    try {
      return userId; 
    } catch {
      return rejectWithValue("Login failed");
    }
  }
);

// Simulate API call for logout
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      // Simulate backend logout (replace with actual API call)
    } catch {
      return rejectWithValue("Logout failed");
    }
    return true;
  }
);
