import React from 'react';
import './CharacterFill.css';

const round = (value: number, precision: number): number => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const checkDecimalRating = (decimalRating: number): string => {
  console.log('checkDecimalRating', decimalRating);
  if (decimalRating > 0 && decimalRating <= 0.25) {
    return 'quarter-fill';
  }
  if (decimalRating > 0.25 && decimalRating <= 0.5) {
    return 'half-fill';
  }
  if (decimalRating > 0.5 && decimalRating <= 0.75) {
    return 'three-quarter-fill';
  }
  if (decimalRating > 0.75 && decimalRating <= 1) {
    return 'full-fill';
  }
  return 'checkDecimalRating error';
};

const determineFillType = (position: number, rating: number): string => {
  const positionRating = round(rating - position + 1, 2); // Adjusted the position logic
  console.log(
    'position:',
    position,
    'rating:',
    rating,
    'positionRating:',
    positionRating,
  );

  if (positionRating <= 0) {
    console.log('Returning zero-fill for positionRating:', positionRating);
    return 'zero-fill';
  }
  if (positionRating >= 1) {
    console.log('Returning full-fill for positionRating:', positionRating);
    return 'full-fill';
  }
  if (positionRating > 0 && positionRating < 1) {
    const fillType = checkDecimalRating(positionRating);
    console.log(
      'Returning fillType:',
      fillType,
      'for positionRating:',
      positionRating,
    );
    return fillType;
  }

  console.log(
    'Returning unexpected determineFillType Error for positionRating:',
    positionRating,
  );
  return 'unexpected determineFillType Error';
};

interface CharacterFillProps {
  position: number;
  rating: number;
  character: string;
}

const CharacterFill: React.FC<CharacterFillProps> = ({
  position,
  rating,
  character,
}) => {
  const className = determineFillType(position, rating);
  console.log('CharacterFill className:', className);

  return (
    <div className={`char ${className}`} data-char={character}>
      {character}
    </div>
  );
};

export default CharacterFill;
