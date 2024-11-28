import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../utils/_DATA";

// Async thunks for API calls
export const fetchQuestions = createAsyncThunk(
    "questions/fetchQuestions",
    async (_, { rejectWithValue }) => {
        try {
            const response = await _getQuestions();
            return response;
        } catch (error) {
            return rejectWithValue(error || "Failed to fetch questions");
        }
    }
);

export const addNewQuestion = createAsyncThunk(
    "questions/addNewQuestion",
    async (newQuestion, { rejectWithValue }) => {
        try {
            const response = await _saveQuestion(newQuestion);
            return response;
        } catch (error) {
            return rejectWithValue(error || "Failed to add question");
        }
    }
);

export const answerQuestion = createAsyncThunk(
    "questions/answerQuestion",
    async ({ authedUser, qid, answer }, { rejectWithValue }) => {
        try {
            const response = await _saveQuestionAnswer({ authedUser, qid, answer });
            return response;
        } catch (error) {
            return rejectWithValue(error || "Failed to answer question");
        }
    }
);

// Slice
const questionSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        resetQuestionState: (state) => {
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch questions
            .addCase(fetchQuestions.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.questions = action.payload;
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Add question
            .addCase(addNewQuestion.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addNewQuestion.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.questions.push(action.payload);
            })
            .addCase(addNewQuestion.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Answer question
            .addCase(answerQuestion.pending, (state) => {
                state.status = "loading";
            })
            .addCase(answerQuestion.fulfilled, (state, action) => {
                state.status = "succeeded";
                const updatedQuestion = action.payload;
                const index = state.questions.findIndex(
                    (q) => q.id === updatedQuestion.id
                );
                if (index !== -1) {
                    state.questions[index] = updatedQuestion;
                }
            })
            .addCase(answerQuestion.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { resetQuestionState } = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
