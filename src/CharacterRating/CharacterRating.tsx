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
  onMouseMove?: (
    position: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  onClick?: (
    position: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  onKeyDown?: (
    position: number,
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
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
          step={step}
          onMouseMove={interactive ? onMouseMove : undefined}
          onClick={interactive ? onClick : undefined}
          onKeyDown={interactive ? onKeyDown : undefined}
        />
      ))}
    </span>
  );
};

export default CharacterRating;
