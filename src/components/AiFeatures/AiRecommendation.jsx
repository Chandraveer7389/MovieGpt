import AiPage from "./AiPage";
import AiSearch from "./AiSearch";
import {NetflixLoginBackgroundImage} from "../../utility/LoginImg"

const AiRecommendation = () => {
  return (
    <div>
      <div className="fixed -z-10 w-full h-screen">
        <img
          className="h-full w-full object-cover"
          src={NetflixLoginBackgroundImage}
        />
        {/* Black overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>
      <div>
        <AiSearch />
        <AiPage />
      </div>
    </div>
  );
};

export default AiRecommendation;
