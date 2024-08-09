// CharacterFill.tsx
import React from 'react';
import determineWidth from '../utils/determineWidth';

interface CharacterFillProps {
  position: number;
  rating: number;
  character: string;
  emptyColor?: string;
  fillColor?: string;
  fontSize?: string;
  step: number;
}

const CharacterFill: React.FC<CharacterFillProps> = ({
  position,
  rating,
  character,
  emptyColor = 'grey',
  fillColor = 'gold',
  fontSize = '24px',
  step,
}) => {
  const width = determineWidth(position, rating, step);

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        background: 'none',
        border: 'none',
        cursor: 'inherit', // Inherit cursor style from parent
        padding: 0,
        outline: 'none',
        lineHeight: 0, // Adjust line-height to reduce height
        verticalAlign: 'middle', // Adjust vertical alignment
      }}
      aria-label={`Rate ${position}`}
      className="rating-symbol"
    >
      <span
        style={{
          color: emptyColor,
          fontSize,
          lineHeight: fontSize, // Ensure the line-height matches the font-size
          boxSizing: 'border-box',
          verticalAlign: 'middle',
        }}
      >
        {character}
      </span>
      <span
        style={{
          top: 0,
          left: 0,
          position: 'absolute',
          color: fillColor,
          overflow: 'hidden',
          width,
          fontSize,
          lineHeight: fontSize, // Ensure the line-height matches the font-size
          boxSizing: 'border-box',
          verticalAlign: 'middle',
        }}
      >
        {character}
      </span>
    </span>
  );
};

export default CharacterFill;
