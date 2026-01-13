import useMovie from "../hooks/useMovie"
import Header from "./Header"


const Browse = () => {
  useMovie();
  return (
    <div>
        <Header />
    </div>
  )
}

export default Browse