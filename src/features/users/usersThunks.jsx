import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../../utils/_DATA"; // Simulated backend API

// Fetch all users
export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await _getUsers(); // Replace with actual API call
      return users;
    } catch {
      return rejectWithValue("Failed to fetch users");
    }
  }
);
