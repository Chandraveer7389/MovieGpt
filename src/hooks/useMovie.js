import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../utility/movieSlice";

const useMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=79bbad454c72eda0143c7aa2c925a3c1"
      );
      const data = await response.json();
      dispatch(addMovie(data.results));
    };
    fetchMovie();
  }, []);
};
export default useMovie;
