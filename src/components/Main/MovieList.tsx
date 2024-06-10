import React from "react";
import Movie from "./Movie";

interface moviesprops {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}
function MovieList({ movies }: { movies: moviesprops[] }) {
  return (
    <ul className="list">
      {movies.map((movie) => {
        return <Movie movie={movie} />;
      })}
    </ul>
  );
}

export default MovieList;
