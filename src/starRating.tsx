import { useState } from 'react';
import { Star } from './star';

export const StarRating = ({ totalStars = 5 }) => {
  const [selectedStar, setSelectedStar] = useState(3);
  return (
    <>
      {[...Array(totalStars)].map((_, i) => <Star key={i} selected={selectedStar > i} onSelect={() => setSelectedStar(i + 1)} />)}
    </>
  );
};
