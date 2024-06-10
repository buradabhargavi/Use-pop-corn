import React from "react";

/* interface moviesprops {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
} */
function Main({ children }: any) {
  return <main className="main">{children}</main>;
}

export default Main;
