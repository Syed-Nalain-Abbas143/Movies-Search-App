import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const ApiKey = import.meta.env.VITE_OMDB_API_KEY;

  const [Loading, setLoading] = useState(false);
  const [display, setDisplay] = useState([]);
  const [title, setTitle] = useState("");
  const [error, seterror] = useState("");

  const displayMovies = async (title) => {
    if (!title.trim()) {
      alert("Please Enter a movie title");
      return;
    }

    setLoading(true);
    try {
      const url = `http://www.omdbapi.com/?apikey=${ApiKey}&s=${title}`;
      let response = await axios.get(url);
      let movies = response.data;

      if (movies.Search) {
        setDisplay(movies.Search);
        seterror("");
      } else {
        seterror("Movies Can't Be Found");
        setDisplay([]);
      }
    } catch (error) {
      seterror("Unable to Fetch", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    displayMovies("alone");
  }, []);

  return (
    <div>
      <div className="heading py-10">
        <h2 className="text-3xl text-center font-bold text-white">
          Search Movies
        </h2>
      </div>

      <div className="flex w-full max-w-2xl mx-auto gap-3 mb-10">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={title}
          className="flex-1 px-5 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-500 border border-gray-300 shadow-lg outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button
          disabled={Loading}
          className="px-6 py-2 text-lg rounded-full bg-amber-500 text-gray-900 font-bold shadow-lg transition-all duration-300 hover:bg-amber-600 hover:scale-95 cursor-pointer active:scale-95 disabled:bg-gray-400 disabled:text-gray-100"
          onClick={() => {
            displayMovies(title);
          }}
        >
          Search
        </button>
      </div>

      <div className="w-full p-10 flex justify-center items-center flex-wrap gap-10">
        {display &&
          display.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="w-48 bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >
                <img
                  src={elem.Poster}
                  alt="Movie Poster"
                  className="w-full h-72 object-cover"
                />

                <h2 className="text-white font-semibold text-lg  text-center line-clamp-2 min-h-16 py-2 px-3">
                  {elem.Title}
                </h2>
              </div>
            );
          })}

        {Loading && (
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
        )}

        {error && <h1 className="text-3xl font-bold text-white">{error}</h1>}
      </div>
    </div>
  );
};

export default App;
