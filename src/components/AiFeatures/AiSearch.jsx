import { useDispatch, useSelector } from "react-redux";
import language from "../../utility/language";
import { useRef } from "react";
import model from "../../utility/gemini";
import MovieApi from "../../utility/MoviApi";
import { addAiMovies } from "../../utility/aiSlice";
const AiSearch = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.configlang.lang);
  const searchResult = useRef(null);
  const tmdb = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      MovieApi,
    );
    const data = await response.json();
    return data;
  };
  const handleAiSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchResult.current.value +
      ". Only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const textData = response.text();
    const gptMovies = textData.split(",");
    console.log(gptMovies);
    const moviePromise = gptMovies.map((m) => tmdb(m));
    const movie = await Promise.all(moviePromise);
   dispatch(addAiMovies({ titles: searchResult.current.value, movies: movie }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchResult}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={language[lang].searchPlaceholder}
        />
        <button
          onClick={handleAiSearch}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800"
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default AiSearch;
