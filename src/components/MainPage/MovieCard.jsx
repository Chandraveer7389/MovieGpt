import PosterImage from "../../utility/posterImage";

const MovieCard = ({ posterImg }) => {
  if (!posterImg) return null;
  return (
    <div className="w-36 md:w-48 flex-shrink-0 cursor-pointer hover:scale-110 transition-transform duration-200">
      <img
        className="rounded-lg object-cover w-full h-full"
        alt="Poster Image"
        src={PosterImage + posterImg}
      />
    </div>
  );
};

export default MovieCard;
