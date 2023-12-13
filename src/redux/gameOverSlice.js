import { createSlice } from "@reduxjs/toolkit";

const gameOverSlice = createSlice({
    name: "gameOver",
    initialState: false,
    reducers: {
        setGameOverTrue: (state, action) => {
            return true;
        },
        setGameOverFalse: (state, action) => {
            return false;
        }
    }
});

export default gameOverSlice.reducer;
export const { setGameOverTrue, setGameOverFalse } = gameOverSlice.actions;
export const gameOverSelector = (state) => state.gameOver;