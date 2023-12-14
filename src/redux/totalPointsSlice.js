import { createSlice } from "@reduxjs/toolkit";

const totalPointsSlice = createSlice({
    name: "totalPoints",
    initialState: [],
    reducers: {
        addScore: (state, action) => {
            state.push(action.payload)
        },
    }

});

export default totalPointsSlice.reducer;
export const { addScore } = totalPointsSlice.actions;
export const totalPointsSelector = (state) => state.totalPoints;