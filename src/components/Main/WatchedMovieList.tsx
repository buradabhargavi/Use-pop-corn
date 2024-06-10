import React from "react";
import WatchedMovie from "./WatchedMovie";

interface movieProps {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
}

function WatchedMovieList({ watched }: { watched: movieProps[] }) {
  console.log(watched);
  return (
    <ul className="list">
      {watched.map((movie) => {
        return <WatchedMovie movie={movie} key={movie.imdbID}></WatchedMovie>;
      })}
    </ul>
  );
}

export default WatchedMovieList;
