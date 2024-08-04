//Controls.tsx
interface ControlsProps {
  rating: number;
  maxRating: number;
  emptyColor: string;
  fillColor: string;
  fontSize: number;
  step: number;
  interactive: boolean;
  onRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCharacterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onMaxRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmptyColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFillColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  onRatingChange,
  onCharacterChange,
  onMaxRatingChange,
  onEmptyColorChange,
  onFillColorChange,
  onFontSizeChange,
  onInteractiveToggle,
  onInteractiveKeyDown,
  onStepChange,
}) => {
  return (
    <div className="controls">
      <label>
        Rating:
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
        Character:
        <select
          value={rating}
          onChange={onCharacterChange}
          aria-label="Character"
        >
          {/* options should be passed as props or filtered in parent */}
        </select>
      </label>
      <label>
        Max Rating:
        <input
          type="number"
          value={maxRating}
          onChange={onMaxRatingChange}
          min="1"
          aria-label="Max Rating"
        />
      </label>
      <label>
        Empty Color:
        <input
          type="color"
          value={emptyColor}
          onChange={onEmptyColorChange}
          aria-label="Empty Color"
        />
      </label>
      <label>
        Fill Color:
        <input
          type="color"
          value={fillColor}
          onChange={onFillColorChange}
          aria-label="Fill Color"
        />
      </label>
      <label>
        Font Size (px):
        <input
          type="number"
          value={fontSize}
          onChange={onFontSizeChange}
          step="2"
          aria-label="Font Size"
        />
      </label>
      <label>
        Interactive:
        <input
          type="checkbox"
          checked={interactive}
          onChange={onInteractiveToggle}
          onKeyDown={onInteractiveKeyDown}
          aria-label="Toggle Interactive"
        />
      </label>
      <label>
        Step:
        <input
          type="number"
          step="0.01"
          value={step}
          onChange={onStepChange}
          min="0.01"
          aria-label="Step"
        />
      </label>
    </div>
  );
};

export default Controls;
