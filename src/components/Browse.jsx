import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import useMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import Header from "./Header";
import MainContainer from "./MainPage/MainContainer";
import SecondaryContainer from "./MainPage/SecondaryContainer";
import AiRecommendation from "./AiFeatures/AiRecommendation";

const Browse = () => {
  const aiToggle = useSelector((store) => store.aiRecommendation.tog);
  useMovie();
  useNowPlaying();
  useTopRated();
  useUpComing();
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      {aiToggle ? (
        <AiRecommendation />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
