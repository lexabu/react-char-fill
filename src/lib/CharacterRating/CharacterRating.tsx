// CharacterRating.tsx
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
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const CharacterRating: React.FC<CharacterRatingProps> = ({
  rating,
  character,
  maxRating: rawMaxRating,
  emptyColor,
  fillColor,
  fontSize,
  interactive = true,
  step: rawStep,
  onMouseMove,
  onMouseLeave,
  onClick,
  onKeyDown,
}) => {
  const step = rawStep > 0 ? rawStep : 0.1;
  const maxRating = rawMaxRating > 0 ? rawMaxRating : 1;
  const safeRating = Math.max(0, Math.min(rating, maxRating));

  return (
    <div
      tabIndex={0}
      className="rating-container"
      onMouseMove={interactive ? onMouseMove : undefined}
      onMouseLeave={interactive ? onMouseLeave : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? onKeyDown : undefined}
      role="slider"
      aria-valuenow={safeRating}
      aria-valuemin={0}
      aria-valuemax={maxRating}
      aria-label="Character rating"
      style={{ cursor: interactive ? 'pointer' : 'default' }}
    >
      {[...Array(maxRating)].map((_, index) => (
        <CharacterFill
          key={index + 1}
          position={index + 1}
          rating={safeRating}
          character={character}
          emptyColor={emptyColor}
          fillColor={fillColor}
          fontSize={fontSize}
          step={step}
        />
      ))}
    </div>
  );
};

export default CharacterRating;
