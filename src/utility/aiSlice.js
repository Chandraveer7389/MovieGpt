import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    name : "Ai Recommendation",
    initialState : {
        tog : false,
    },
    reducers : {
        toggleSearch : (state) => {
            state.tog = !state.tog
        }
    }
})

export const {toggleSearch}  = aiSlice.actions;
export default aiSlice.reducer;

