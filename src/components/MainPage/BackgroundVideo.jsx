import { useSelector } from "react-redux";
import useTrailer from "../../hooks/useTrailer";

const BackgroundVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.movieTrailer);
  useTrailer(movieId);
  if (!trailerVideo) return null;

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className="w-full aspect-video pointer-events-none scale-150 -mt-24 md:-mt-0"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" +
          trailerVideo.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
