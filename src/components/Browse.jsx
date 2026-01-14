import useMovie from "../hooks/useMovie"
import Header from "./Header"
import MainContainer from "./MainPage/MainContainer"
import  SecondaryContainer from "./MainPage/SecondaryContainer"

const Browse = () => {
  useMovie();
  return (
    <div className="w-full overflow-x-hidden">
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>
  )
}

export default Browse