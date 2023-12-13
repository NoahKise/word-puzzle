import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
    name: 'answer',
    initialState: [],
    reducers: {
        setAnswer: (state, action) => {
            return action.payload;
        },
    }
})

export default answerSlice.reducer;
export const { setAnswer } = answerSlice.actions;
export const answerSelector = (state) => state.answer;