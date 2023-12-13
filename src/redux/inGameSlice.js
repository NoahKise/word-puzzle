import { createSlice } from "@reduxjs/toolkit";

const inGameSlice = createSlice({
    name: "inGame",
    initialState: false,
    reducers: {
        setStartTrue: (state, action) => {
            return true;
        },
    }

});

export default inGameSlice.reducer;
export const { setStartTrue } = inGameSlice.actions;
export const inGameSelector = (state) => state.inGame;