import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../utility/movieSlice";
import MovieApi from "../utility/MoviApi";

const useMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",MovieApi
      );
      const data = await response.json();
      dispatch(addMovie(data.results));
    };
    fetchMovie();
  }, []);
};
export default useMovie;
