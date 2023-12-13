import { createSlice } from "@reduxjs/toolkit";

const wrongGuessesSlice = createSlice({
    name: "wrongGuesses",
    initialState: [],
    reducers: {
        addWrongLetter: (state, action) => {
            return action.payload;
        },
        returnDefaultWrong: (state, action) => {
            return [];
        }
    }

});

export default wrongGuessesSlice.reducer;
export const { addWrongLetter, returnDefaultWrong } = wrongGuessesSlice.actions;
export const wrongGuessesSelector = (state) => state.wrongGuesses;