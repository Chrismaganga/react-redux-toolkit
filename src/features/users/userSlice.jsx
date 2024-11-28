import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: { users: {} },
  reducers: {
    receiveUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { receiveUsers } = userSlice.actions;
export default userSlice.reducer;
