import React from 'react';
import determineWidth from '../utils/determineWidth';

interface CharacterFillProps {
  position: number;
  rating: number;
  character: string;
  emptyColor?: string;
  fillColor?: string;
  fontSize?: string;
}

const CharacterFill: React.FC<CharacterFillProps> = ({
  position,
  rating,
  character,
  emptyColor = 'grey',
  fillColor = 'gold',
  fontSize = '24px',
}) => {
  const width = determineWidth(position, rating);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ color: emptyColor, fontSize }}>{character}</span>
      <span
        style={{
          top: 0,
          left: 0,
          position: 'absolute',
          color: fillColor,
          overflow: 'hidden',
          width,
          fontSize,
        }}
      >
        {character}
      </span>
    </span>
  );
};

export default CharacterFill;
