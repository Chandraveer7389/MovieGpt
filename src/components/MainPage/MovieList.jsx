import MovieCard from "./MovieCard";
const MovieList = ({ title, movie }) => {
  if (!movie) return;
  return (
    <div className="px-6 text-white">
      <h1 className="text-xl md:text-3xl py-4 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide p-6">
        <div className="flex gap-4">
          {movie.map((mov) => (
            <MovieCard key={mov.id} posterImg={mov.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
