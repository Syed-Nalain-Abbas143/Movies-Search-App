import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar";
import Movies from "./components/Movies";
import Heading from "./components/Heading";

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
    setDisplay([]);

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
      seterror("Unable to Fetch");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    displayMovies("hulk");
  }, []);

  return (
    <div>
      <div className="px-10 py-5 flex justify-between items-center  bg-white/10">
        <Heading />

        <SearchBar
          title={title}
          setTitle={setTitle}
          Loading={Loading}
          displayMovies={displayMovies}
        />
      </div>

      <Movies display={display} Loading={Loading} error={error} />
    </div>
  );
};

export default App;
