import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Popular"} movie={movies.addedMovie} />
        <MovieList title={"Now Playing"} movie={movies.movieNowPlaying} />
        <MovieList title={"Top Rated"} movie={movies.movieTopRated} />
        <MovieList title={"Up Coming"} movie={movies.movieUpComing} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
