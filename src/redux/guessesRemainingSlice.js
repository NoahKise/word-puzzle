import { createSlice } from "@reduxjs/toolkit";

const guessesRemainingSlice = createSlice({
    name: "guessesRemaining",
    initialState: 6,
    reducers: {
        decrementGuess: (state, action) => {
            return state - 1;
        },
        returnTo6: (state, action) => {
            return 6;
        }
    }

});

export default guessesRemainingSlice.reducer;
export const { decrementGuess, returnTo6 } = guessesRemainingSlice.actions;
export const guessesRemainingSelector = (state) => state.guessesRemaining;