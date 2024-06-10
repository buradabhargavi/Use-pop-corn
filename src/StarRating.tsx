import React, { useState } from "react";
import Star from "./components/Main/Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainer = {
  display: "flex",
  gap: "4px",
};

function StarRating({
  maxStars = 5,
  color = "green",
  size = 54,
  messages = [],
  defaultRating = 0,
  onsetRating,
}: {
  maxStars: number;
  color: string;
  size: number;
  messages: string[];
  defaultRating: number;
  onsetRating?: (rating: number) => void;
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  const handleRating = (rating: number) => {
    setRating(rating);
    if (onsetRating) onsetRating(rating);
  };

  return (
    <div style={containerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxStars }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          ></Star>
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxStars
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
      {/*   <p style={textStyle}>{rating}</p> */}
    </div>
  );
}

export default StarRating;
