import { useSelector } from "react-redux";
import MovieCard from "../MainPage/MovieCard";

const AiPage = () => {
  const recommended = useSelector((store) => store.aiRecommendation);
  const { recommendedTitles, recommendedMovies } = recommended || {};
  if (!recommendedMovies) return null;
  return (
    <div className="bg-black min-h-screen text-white p-4 m-4 bg-opacity-90 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">
        Recommendation for:{" "}
        <span className="text-red-500">{recommendedTitles}</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {recommendedMovies.map((mov, index) => {
          if (!mov.results || !mov.results[0]) {
            return null;
          }
          const movieData = mov.results[0];
          return (
            <MovieCard key={movieData.id} posterImg={movieData.poster_path} />
          );
        })}
      </div>
    </div>
  );
};

export default AiPage;
