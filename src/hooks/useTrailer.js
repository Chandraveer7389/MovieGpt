import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MovieApi from "../utility/MoviApi"
import { addMovieTrailer } from "../utility/movieSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MovieApi
    );
    const data = await response.json();
    const trailers = data.results.filter((obj) => obj.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : data.results[0];
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    fetchData();
  }, []);
};
export default useTrailer;
