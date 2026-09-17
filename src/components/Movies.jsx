import React from "react";

const Movies = ({ display, Loading, error }) => {
  return (
    <div className="w-full p-10 flex justify-center items-center flex-wrap gap-10">
      {display.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="w-80 h-60 flex bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            
            <div className="w-1/2 shrink-0">
              <img
                src={elem.Poster ? elem.Poster : "Poster Not Available"}
                alt="Poster Not Available"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="w-3/4 flex flex-col justify-center items-start px-6 py-4 gap-4">
              <div>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wide">
                  Title
                </p>
                <h2 className="text-white font-semibold text-lg line-clamp-2">
                  {elem.Title}
                </h2>
              </div>

              <div>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wide">
                  Type
                </p>
                <h2 className="text-white font-semibold text-lg">
                  {elem.Type}
                </h2>
              </div>

              <div>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wide">
                  Year
                </p>
                <h2 className="text-white font-semibold text-lg">
                  {elem.Year}
                </h2>
              </div>
            </div>
          </div>
        );
      })}

      {Loading && (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
      )}

      {error && <h1 className="text-3xl font-bold text-white">{error}</h1>}
    </div>
  );
};

export default Movies;
