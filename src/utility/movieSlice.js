import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movie",
    initialState : {
        addedMovie : null,
    },
    reducers : {
        addMovie : (state,action) => {
            state.addedMovie = action.payload;
        }
    }
});
export const {addMovie} = MovieSlice.actions;
export default MovieSlice.reducer;