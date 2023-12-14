import { createSlice } from "@reduxjs/toolkit";

const inGameSlice = createSlice({
    name: "inGame",
    initialState: false,
    reducers: {
        setStartTrue: (state, action) => {
            return true;
        },
        setStartFalse: (state, action) => {
            return false;
        },
    }

});

export default inGameSlice.reducer;
export const { setStartTrue, setStartFalse } = inGameSlice.actions;
export const inGameSelector = (state) => state.inGame;