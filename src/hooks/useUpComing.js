import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieUpComing } from "../utility/movieSlice";
import MovieApi from "../utility/MoviApi";

const useUpComing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",MovieApi
      );
      const data = await response.json();
      dispatch(addMovieUpComing(data.results));
    };
    fetchMovie();
  }, []);
};
export default useUpComing;
