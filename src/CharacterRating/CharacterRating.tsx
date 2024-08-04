import React from 'react';
import CharacterFill from '../CharacterFill/CharacterFill';

interface CharacterRatingProps {
  rating: number;
  character: string;
  maxRating: number;
  emptyColor?: string;
  fillColor?: string;
  fontSize?: string;
  interactive?: boolean;
  step: number;
  onMouseMove?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLSpanElement>) => void;
}

const CharacterRating: React.FC<CharacterRatingProps> = ({
  rating,
  character,
  maxRating,
  emptyColor,
  fillColor,
  fontSize,
  interactive = true,
  step,
  onMouseMove,
  onClick,
  onKeyDown,
}) => {
  return (
    <span
      tabIndex={0}
      className="rating-span"
      onMouseMove={interactive ? onMouseMove : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? onKeyDown : undefined}
      role="slider"
      aria-valuenow={rating}
      aria-valuemin={0}
      aria-valuemax={maxRating}
      aria-label="Character rating"
    >
      {[...Array(maxRating)].map((_, index) => (
        <CharacterFill
          key={index + 1}
          position={index + 1}
          rating={rating}
          character={character}
          emptyColor={emptyColor}
          fillColor={fillColor}
          fontSize={fontSize}
          step={step}
        />
      ))}
    </span>
  );
};

export default CharacterRating;
