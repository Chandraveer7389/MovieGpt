import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    name : "Ai Recommendation",
    initialState : {
        tog : false,
        recommendedTitles : null,
        recommendedMovies : null,
    },
    reducers : {
        toggleSearch : (state) => {
            state.tog = !state.tog
        },
        addAiMovies : (state,action) => {
            const {titles,movies} = action.payload
            state.recommendedMovies = movies
            state.recommendedTitles = titles
        }
    }
})

export const {toggleSearch,addAiMovies}  = aiSlice.actions;
export default aiSlice.reducer;

