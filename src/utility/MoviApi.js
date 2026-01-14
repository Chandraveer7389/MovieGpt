const MovieApi = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:"Bearer " + import.meta.env.VITE_TMDB_TOKEN,
  },
};
export default MovieApi;