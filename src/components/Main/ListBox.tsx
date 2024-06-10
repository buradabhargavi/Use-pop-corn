import React, { useState } from "react";
import MovieList from "./MovieList";

/* interface moviesprops {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}
 */
function ListBox({ children }: any) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((prev) => !prev)}
      >
        {isOpen1 ? "-" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}

export default ListBox;
