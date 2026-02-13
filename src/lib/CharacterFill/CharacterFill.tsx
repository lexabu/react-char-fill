// CharacterFill.tsx
import React from 'react';
import determineWidth from '../utils/determineWidth';
import { ensureTextPresentation } from '../utils/characters';

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
  const safeStep = step > 0 ? step : 0.1;
  const width = determineWidth(position, rating, safeStep);
  const displayChar = ensureTextPresentation(character);

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        background: 'none',
        border: 'none',
        cursor: 'inherit',
        padding: 0,
        outline: 'none',
        lineHeight: 0,
        verticalAlign: 'middle',
      }}
      aria-label={`Rate ${position}`}
      className="rating-symbol"
    >
      <span
        style={{
          color: emptyColor,
          fontSize,
          lineHeight: fontSize,
          boxSizing: 'border-box',
          verticalAlign: 'middle',
        }}
      >
        {displayChar}
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
          lineHeight: fontSize,
          boxSizing: 'border-box',
          verticalAlign: 'middle',
        }}
      >
        {displayChar}
      </span>
    </span>
  );
};

export default CharacterFill;
