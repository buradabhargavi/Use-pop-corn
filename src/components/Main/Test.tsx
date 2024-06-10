import React, { useState } from "react";
import StarRating from "../../StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  const handleRate = (rating: number) => {
    setMovieRating(rating);
  };

  return (
    <div>
      <StarRating
        maxStars={5}
        color="green"
        messages={[]}
        size={48}
        defaultRating={2}
        onsetRating={handleRate}
      ></StarRating>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

export default Test;
