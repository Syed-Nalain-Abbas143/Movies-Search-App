import React from "react";

const searchBar = ({ title, setTitle, Loading, displayMovies }) => {
  return (
     
    <input
        type="text"
        placeholder="Search for a movie..."
        value={title}
        className="px-5 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-500 border border-gray-300 shadow-lg outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            displayMovies(title);
          }
        }}
      />

      // <button
      //   disabled={Loading}
      //   className="px-6 py-2 text-lg rounded-full bg-amber-500 text-gray-900 font-bold shadow-lg transition-all duration-300 hover:bg-amber-600 hover:scale-95 cursor-pointer active:scale-95 disabled:bg-gray-400 disabled:text-gray-100"
      //   onClick={() => {
      //     displayMovies(title);
      //   }}
      // >
      //   Search
      // </button>
    
  );
};

export default searchBar;
