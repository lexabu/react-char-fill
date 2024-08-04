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

const CharacterFill: React.FC<CharacterFillProps> = ({
  position,
  rating,
  character,
  emptyColor = 'grey',
  fillColor = 'gold',
  fontSize = '24px',
  step,
  onMouseMove,
  onClick,
  onKeyDown,
}) => {
  const width = determineWidth(position, rating, step);

  return (
    <button
      style={{
        position: 'relative',
        display: 'inline-flex',
        background: 'none',
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        padding: 0,
        outline: 'none',
      }}
      onMouseMove={(e) => onMouseMove && onMouseMove(position, e)}
      onClick={(e) => onClick && onClick(position, e)}
      onKeyDown={(e) => onKeyDown && onKeyDown(position, e)}
      aria-label={`Rate ${position}`}
      disabled={!onClick}
    >
      <span
        style={{
          color: emptyColor,
          fontSize,
          boxSizing: 'border-box',
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
          boxSizing: 'border-box',
        }}
      >
        {character}
      </span>
    </button>
  );
};

export default CharacterFill;
