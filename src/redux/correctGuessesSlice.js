import { createSlice } from "@reduxjs/toolkit";

const correctGuessesSlice = createSlice({
    name: "correctGuesses",
    initialState: [],
    reducers: {
        addCorrectLetter: (state, action) => {
            return action.payload;
        },
        returnDefaultCorrect: (state, action) => {
            return [];
        }
    }

});

export default correctGuessesSlice.reducer;
export const { addCorrectLetter, returnDefaultCorrect } = correctGuessesSlice.actions;
export const correctGuessesSelector = (state) => state.correctGuesses;