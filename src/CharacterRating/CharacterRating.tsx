import React from 'react';
import CharacterFill from '../CharacterFill/CharacterFill';

interface CharacterRatingProps {
  rating: number;
  character: string;
  maxRating: number;
  emptyColor?: string;
  fillColor?: string;
  fontSize?: string;
}

const CharacterRating: React.FC<CharacterRatingProps> = ({
  rating,
  character,
  maxRating,
  emptyColor,
  fillColor,
  fontSize,
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
          fontSize={fontSize}
        />
      ))}
    </span>
  );
};

export default CharacterRating;
