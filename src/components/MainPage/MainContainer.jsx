import { useSelector } from "react-redux"
import BackgroundVideo from "./BackgroundVideo"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
  const movie = useSelector((store) => store.movie.addedMovie)
  if (!movie) return;
  return (
    <div>
      <VideoTitle movieDetails={movie[0]} />
      <BackgroundVideo />
    </div>
  )
}

export default MainContainer