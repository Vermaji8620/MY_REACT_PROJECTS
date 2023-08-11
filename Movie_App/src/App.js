import "./App.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const api_url = "http://www.omdbapi.com/?en=tt3896198&apikey=705bc34c";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchmovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchmovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>YOUR MOVIENAME</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src="SearchIcon"
          alt="search"
          onClick={() => searchmovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movie1} /> */}
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>NO MOVIES FOUND</h2>
        </div>
      )}
    </div>
  );
}
export default App;
