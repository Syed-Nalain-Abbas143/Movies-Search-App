import React from "react";

const searchBar = ({ title, setTitle, Loading, displayMovies }) => {
  return (
    <div className="relative w-full max-w-sm">
  <input
    type="text"
    placeholder="Search for a movie..."
    value={title}
    className="
      w-full
      px-5 py-3 pr-12
      rounded-2xl
      bg-gray-900/70
      text-white
      border border-gray-600
      placeholder-gray-500
      shadow-lg
      outline-none
      transition-all duration-300
      focus:border-blue-500
      focus:ring-2
      focus:ring-blue-500/30
      focus:shadow-blue-500/20
    "
    onChange={(e) => {
      setTitle(e.target.value);
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        displayMovies(title);
      }
    }}
  />

  <i className="
    absolute
    right-4
    top-1/2
    -translate-y-1/2
    text-gray-400
    fa-solid fa-magnifying-glass
  "></i>
</div>
  );
};

export default searchBar;
