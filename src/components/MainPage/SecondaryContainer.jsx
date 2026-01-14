
const SecondaryContainer = () => {
  return (
    <div className="bg-black w-full">
      {/* magic here: -mt-52 pulls the section UP 
        z-20 puts it ON TOP of the video 
      */}
      <div className="-mt-52 pl-12 relative z-20">
        
        {/* Placeholder for your future MovieList components */}
        <h1 className="text-white text-3xl font-bold py-4">Trending Now</h1>
        
        <div className="flex overflow-x-scroll gap-4 pb-10 hide-scrollbar">
           {/* Temporary placeholders to show the UI effect */}
           <div className="w-48 h-72 bg-gray-800 shrink-0 rounded-md hover:scale-110 transition-all"></div>
           <div className="w-48 h-72 bg-gray-800 shrink-0 rounded-md hover:scale-110 transition-all"></div>
           <div className="w-48 h-72 bg-gray-800 shrink-0 rounded-md hover:scale-110 transition-all"></div>
           <div className="w-48 h-72 bg-gray-800 shrink-0 rounded-md hover:scale-110 transition-all"></div>
           <div className="w-48 h-72 bg-gray-800 shrink-0 rounded-md hover:scale-110 transition-all"></div>
        </div>

      </div>
    </div>
  );
};
export default SecondaryContainer