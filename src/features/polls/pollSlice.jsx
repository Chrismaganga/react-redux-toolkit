import { createSlice } from '@reduxjs/toolkit';

const pollSlice = createSlice({
  name: 'polls',
  initialState: { polls: {} },
  reducers: {
    receivePolls(state, action) {
      state.polls = action.payload;
    },
    saveAnswer(state, action) {
      const { pollId, userId, answer } = action.payload;
      state.polls[pollId][answer].votes.push(userId);
    },
  },
});

export const { receivePolls, saveAnswer } = pollSlice.actions;
export default pollSlice.reducer;
