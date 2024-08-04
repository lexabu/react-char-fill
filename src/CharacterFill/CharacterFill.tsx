import React from 'react';
import './CharacterFill.css';
import determineFillType from '../utils/determineFillType';
import getWidth from '../utils/getWidth';

interface CharacterFillProps {
  position: number;
  rating: number;
  character: string;
  emptyColor?: string;
  fillColor?: string;
}

const CharacterFill: React.FC<CharacterFillProps> = ({
  position,
  rating,
  character,
  emptyColor,
  fillColor,
}) => {
  const className = determineFillType(position, rating);
  const width = getWidth(className);

  return (
    <div
      className={`char ${className}`}
      data-char={character}
      style={{ color: emptyColor }}
    >
      <span
        style={{
          position: 'absolute',
          color: fillColor,
          overflow: 'hidden',
          top: 0,
          left: 0,
          width: width,
        }}
      >
        {character}
      </span>
      {character}
    </div>
  );
};

export default CharacterFill;
