import { useSelector } from "react-redux";
import language from "../../utility/language";
const AiSearch = () => {
  const lang = useSelector((store) => store.configlang.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={language[lang].searchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800">
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default AiSearch;
