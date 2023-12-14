import { createSlice } from "@reduxjs/toolkit";

const currentPointsSlice = createSlice({
    name: "currentPoints",
    initialState: 0,
    reducers: {
        currentScore: (state, action) => {
            return (action.payload)
        },
    }

});

export default currentPointsSlice.reducer;
export const { currentScore } = currentPointsSlice.actions;
export const currentPointsSelector = (state) => state.currentPoints;