import { createSlice } from "@reduxjs/toolkit";

const endStateSlice = createSlice({
    name: "endState",
    initialState: false,
    reducers: {
        setEndTrue: (state, action) => {
            return true;
        },
        setEndFalse: (state, action) => {
            return false;
        }
    }

});

export default endStateSlice.reducer;
export const { setEndTrue, setEndFalse } = endStateSlice.actions;
export const endStateSelector = (state) => state.endState;