import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movie",
    initialState : {
        addedMovie : null,
        movieTrailer : null,
    },
    reducers : {
        addMovie : (state,action) => {
            state.addedMovie = action.payload;
        },
        addMovieTrailer : (state,action) =>{
            state.movieTrailer = action.payload;
        }
    }
});
export const {addMovie, addMovieTrailer} = MovieSlice.actions;
export default MovieSlice.reducer;