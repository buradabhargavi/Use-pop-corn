import React, { useState } from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Main from "./components/Main/Main";
import Numresults from "./components/NavBar/Numresults";
import Box from "./components/Main/Box";
import MovieList from "./components/Main/MovieList";
import Summary from "./components/Main/Summary";
import WatchedMovieList from "./components/Main/WatchedMovieList";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const count = movies.length;

  return (
    <div className="App">
      <Nav>
        <Numresults count={count} />
      </Nav>
      <Main>
        {/*  <Box element={<MovieList movies={movies}></MovieList>} />
        <Box
          element={
            <>
              <Summary watched={watched} />
              <WatchedMovieList watched={watched}></WatchedMovieList>
            </>
          }
        ></Box> */}
        <Box>
          <MovieList movies={movies}></MovieList>
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedMovieList watched={watched}></WatchedMovieList>
        </Box>
      </Main>
    </div>
  );
}

export default App;
