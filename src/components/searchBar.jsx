import React from "react";

const searchBar = ({ title, setTitle, Loading, displayMovies }) => {
  return (
    <>
    <input
        type="text"
        placeholder="Search for a movie..."
        value={title}
        className="px-5 py-2 rounded-xl text-gray-300 border-gray-400 border placeholder-gray-500 shadow-lg outline-none "
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            displayMovies(title);
          }
        }}
      />
      </> 
  );
};

export default searchBar;
