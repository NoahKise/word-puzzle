import { createSlice } from "@reduxjs/toolkit";

const displayAnswerSlice = createSlice({
    name: 'displayAnswer',
    initialState: [],
    reducers: {
        userDisplay: (state, action) => {
            return action.payload;
        },
    }
})

export default displayAnswerSlice.reducer;
export const { userDisplay } = displayAnswerSlice.actions;
export const displayAnswerSelector = (state) => state.displayAnswer;