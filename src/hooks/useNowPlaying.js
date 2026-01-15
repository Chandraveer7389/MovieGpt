import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addMovieNowPlaying } from "../utility/movieSlice";
import MovieApi from "../utility/MoviApi";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",MovieApi
      );
      const data = await response.json();
      dispatch(addMovieNowPlaying(data.results));
    };
    fetchMovie();
  }, []);
};
export default useNowPlaying;
