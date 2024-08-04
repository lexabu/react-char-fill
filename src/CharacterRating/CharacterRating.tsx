import React from 'react';
import CharacterFill from '../CharacterFill/CharacterFill';

interface CharacterRatingProps {
  rating: number;
  character: string;
  maxRating: number;
  emptyColor?: string;
  fillColor?: string;
}

const CharacterRating: React.FC<CharacterRatingProps> = ({
  rating,
  character,
  maxRating,
  emptyColor,
  fillColor,
}) => {
  return (
    <span>
      {[...Array(maxRating)].map((_, index) => (
        <CharacterFill
          key={index + 1}
          position={index + 1}
          rating={rating}
          character={character}
          emptyColor={emptyColor}
          fillColor={fillColor}
        />
      ))}
    </span>
  );
};

export default CharacterRating;
