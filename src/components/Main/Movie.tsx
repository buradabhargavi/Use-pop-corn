import React from "react";

interface movieProps {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}
function Movie({ movie }: { movie: movieProps }) {
  return (
    <div>
      <li key={movie.imdbID}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>📅</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    </div>
  );
}

export default Movie;
