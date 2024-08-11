import React from 'react';

interface ControlsProps {
  rating: number;
  maxRating: number;
  emptyColor: string;
  fillColor: string;
  fontSize: number;
  step: number;
  interactive: boolean;
  characters: { character: string; name: string }[];
  character: string;
  onRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCharacterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onMaxRatingChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onEmptyColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFillColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFontSizeBlur: () => void;
  onInteractiveToggle: () => void;
  onInteractiveKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onStepChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Controls: React.FC<ControlsProps> = ({
  rating,
  maxRating,
  emptyColor,
  fillColor,
  fontSize,
  step,
  interactive,
  characters,
  character,
  onRatingChange,
  onCharacterChange,
  onMaxRatingChange,
  onEmptyColorChange,
  onFillColorChange,
  onFontSizeChange,
  onFontSizeBlur,
  onInteractiveToggle,
  onInteractiveKeyDown,
  onStepChange,
}) => {
  return (
    <div className="controls">
      <label>
        Character
        <select
          value={character}
          onChange={onCharacterChange}
          aria-label="Character"
        >
          {characters.map(char => (
            <option key={char.character} value={char.character}>
              {char.character}
            </option>
          ))}
        </select>
      </label>

      <label>
        Rating
        <input
          type="number"
          step={step}
          value={rating}
          onChange={onRatingChange}
          min="0"
          max={maxRating}
          aria-label="Rating"
        />
      </label>

      <label>
        Step
        <input
          type="number"
          step="0.1"
          value={step}
          onChange={onStepChange}
          min="0.0"
          aria-label="Step"
        />
      </label>

      <label>
        Max Rating
        <select
          value={maxRating}
          onChange={onMaxRatingChange}
          aria-label="Max Rating"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>

      <label>
        Empty Color
        <input
          type="color"
          value={emptyColor}
          onChange={onEmptyColorChange}
          aria-label="Empty Color"
        />
      </label>

      <label>
        Fill Color
        <input
          type="color"
          value={fillColor}
          onChange={onFillColorChange}
          aria-label="Fill Color"
        />
      </label>

      <label>
        Font Size
        <input
          type="number"
          value={fontSize || ''}
          onChange={onFontSizeChange}
          onBlur={onFontSizeBlur}
          step="1"
          min="1"
          aria-label="Font Size"
        />
      </label>

      <label>
        Interactive
        <input
          type="checkbox"
          checked={interactive}
          onChange={onInteractiveToggle}
          onKeyDown={onInteractiveKeyDown}
          aria-label="Toggle Interactive"
        />
      </label>
    </div>
  );
};

export default Controls;
