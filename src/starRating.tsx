import { useState } from "react";
import { Star } from "./star";

export const StarRating = ({ totalStars = 5, style = {}, ...props }) => {
  const [selectedStar, setSelectedStar] = useState(3);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => setSelectedStar(i + 1)}
        />
      ))}
    </div>
  );
};
