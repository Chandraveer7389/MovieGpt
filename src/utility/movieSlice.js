import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    addedMovie: null,
    movieTrailer: null,
    movieNowPlaying: null,
    movieTopRated: null,
    movieUpComing: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.addedMovie = action.payload;
    },
    addMovieNowPlaying: (state, action) => {
      state.movieNowPlaying = action.payload;
    },
    addMovieUpComing: (state, action) => {
      state.movieUpComing = action.payload;
    },
    addMovieTopRated: (state, action) => {
      state.movieTopRated = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const {
  addMovie,
  addMovieTrailer,
  addMovieNowPlaying,
  addMovieTopRated,
  addMovieUpComing,
} = MovieSlice.actions;
export default MovieSlice.reducer;
