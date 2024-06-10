import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";
import Test from "./components/Main/Test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/*  <App /> */}
    <StarRating
      maxStars={5}
      messages={["terrible", "Bad", "Okay", "Good", "Excellent"]}
      color="violet"
      size={40}
      defaultRating={3}
    />
    <Test />
    {/* <StarRating maxStars={10} color="pink" size={60} />
    <StarRating maxStars={10} color="yellow" size={90} /> */}
  </React.StrictMode>
);
