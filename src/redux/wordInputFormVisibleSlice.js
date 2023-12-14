import { createSlice } from "@reduxjs/toolkit";

const wordInputFormVisibleSlice = createSlice({
    name: "wordInputFormVisible",
    initialState: false,
    reducers: {
        setInputFormVisibleTrue: (state, action) => {
            return true;
        },
        setInputFormVisibleFalse: (state, action) => {
            return false;
        }
    }
});

export default wordInputFormVisibleSlice.reducer;
export const { setInputFormVisibleTrue, setInputFormVisibleFalse } = wordInputFormVisibleSlice.actions;
export const wordInputFormVisibleSelector = (state) => state.wordInputFormVisible;