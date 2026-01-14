import { useSelector } from "react-redux"
import BackgroundVideo from "./BackgroundVideo"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
  const movie = useSelector((store) => store.movie.addedMovie)
  //console.log(movie)
  if (!movie) return;
  const mainMovie = movie[0];
  return (
    <div className="relative pt-0 bg-black w-full overflow-hidden">
      <VideoTitle movieDetails={mainMovie} />
      <BackgroundVideo movieId={mainMovie.id} />
    </div>
  )
}

export default MainContainer