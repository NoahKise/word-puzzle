import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: '',
    reducers: {
        displayError: (state, action) => {
            return action.payload;
        },
    }
})

export default errorSlice.reducer;
export const { displayError } = errorSlice.actions;
export const errorSelector = (state) => state.error;