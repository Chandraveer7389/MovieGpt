const VideoTitle = (props) => {
  const { title, overview } = props.movieDetails;

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black via-transparent to-transparent z-20">
      {/* Title */}
      <h1 className="text-2xl md:text-6xl font-bold w-full md:w-1/2 drop-shadow-lg mb-4">
        {title}
      </h1>
      
      {/* Overview Description */}
      <p className="hidden md:block py-6 text-lg w-1/4 text-gray-200 drop-shadow-md">
        {overview}
      </p>

      {/* Buttons Container */}
      <div className="flex gap-4 mt-4 md:mt-0">
        
        {/* Play Button - White Background */}
        <button className="bg-white text-black py-2 md:py-3 px-8 md:px-12 text-lg md:text-xl rounded-md hover:bg-opacity-80 transition-all font-bold flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>

        {/* More Info Button - Translucent Gray */}
        <button className="bg-gray-500/70 text-white py-2 md:py-3 px-8 md:px-12 text-lg md:text-xl rounded-md hover:bg-opacity-50 transition-all font-bold flex items-center gap-2 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;