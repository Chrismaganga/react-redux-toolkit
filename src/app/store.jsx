import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import pollReducer from '../features/polls/pollSlice';
import userReducer from '../features/users/userSlice';
import { questionReducer} from '../features/questions/questionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    polls: pollReducer,
    users: userReducer,
    questions: questionReducer,
  },
});
export default store;
