import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addMovieTopRated } from "../utility/movieSlice";
import MovieApi from "../utility/MoviApi";

const useTopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",MovieApi
      );
      const data = await response.json();
      dispatch(addMovieTopRated(data.results));
    };
    fetchMovie();
  }, []);
};
export default useTopRated;
