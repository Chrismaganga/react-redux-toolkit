import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../utils/_DATA";

// Fetch all polls
export const fetchPollsThunk = createAsyncThunk(
  "polls/fetchPolls",
  async (_, { rejectWithValue }) => {
    try {
      const questions = await _getQuestions(); // Replace with actual API call
      return questions;
    } catch {
      return rejectWithValue("Failed to fetch polls");
    }
  }
);

// Create a new poll
export const createPollThunk = createAsyncThunk(
  "polls/createPoll",
  async (pollData, { rejectWithValue }) => {
    try {
      const newPoll = await _saveQuestion(pollData); // Replace with actual API call
      return newPoll;
    } catch {
      return rejectWithValue("Failed to create poll");
    }
  }
);

// Submit a vote
export const submitVoteThunk = createAsyncThunk(
  "polls/submitVote",
  async ({ questionId, userId, answer }, { rejectWithValue }) => {
    try {
      await _saveQuestionAnswer({ authedUser: userId, qid: questionId, answer });
      return { questionId, userId, answer };
    } catch {
      return rejectWithValue("Failed to submit vote");
    }
  }
);
