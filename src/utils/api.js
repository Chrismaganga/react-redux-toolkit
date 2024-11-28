import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend URL

// Axios instance for reusable configurations
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API Service
const api = {
  // Authentication
  login: (credentials) => apiClient.post("/auth/login", credentials),
  logout: () => apiClient.post("/auth/logout"),

  // Users
  getUsers: () => apiClient.get("/users"),
  getUserById: (id) => apiClient.get(`/users/${id}`),

  // Polls
  getPolls: () => apiClient.get("/polls"),
  getPollById: (id) => apiClient.get(`/polls/${id}`),
  createPoll: (pollData) => apiClient.post("/polls", pollData),
  answerPoll: (pollId, answerData) =>
    apiClient.post(`/polls/${pollId}/answer`, answerData),
};

export default api;
