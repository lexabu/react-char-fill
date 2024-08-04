import React, { useState } from 'react';
import CharacterRating from './CharacterRating/CharacterRating';
import './App.css';
import { characters } from './utils/characters';

function App() {
  const [rating, setRating] = useState(3);
  const [character, setCharacter] = useState('★');
  const [maxRating, setMaxRating] = useState(5);
  const [emptyColor, setEmptyColor] = useState('grey');
  const [fillColor, setFillColor] = useState('gold');
  const [fontSize, setFontSize] = useState(24); // Start as numeric value

  const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCharacter(e.target.value);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseFloat(e.target.value));
  };

  const handleMaxRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxRating(parseInt(e.target.value, 10));
  };

  const handleEmptyColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyColor(e.target.value);
  };

  const handleFillColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFillColor(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 12 && value <= 48) {
      setFontSize(value);
    }
  };

  return (
    <div className="app">
      <h1>Character Rating Test</h1>
      <div className="rating-section">
        <CharacterRating
          rating={rating}
          character={character}
          maxRating={maxRating}
          emptyColor={emptyColor}
          fillColor={fillColor}
          fontSize={`${fontSize}px`} // Convert to string with 'px'
        />
      </div>
      <div className="controls">
        <label>
          Rating:
          <input
            type="number"
            step="0.25"
            value={rating}
            onChange={handleRatingChange}
            min="0"
            max={maxRating}
          />
        </label>
        <label>
          Character:
          <select value={character} onChange={handleCharacterChange}>
            {characters.map((char) => (
              <option key={char} value={char}>
                {char}
              </option>
            ))}
          </select>
        </label>
        <label>
          Max Rating:
          <input
            type="number"
            value={maxRating}
            onChange={handleMaxRatingChange}
            min="1"
          />
        </label>
        <label>
          Empty Color:
          <input
            type="color"
            value={emptyColor}
            onChange={handleEmptyColorChange}
          />
        </label>
        <label>
          Fill Color:
          <input
            type="color"
            value={fillColor}
            onChange={handleFillColorChange}
          />
        </label>
        <label>
          Font Size (px):
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            min="12"
            max="48"
            step="2"
          />
        </label>
        {fontSize < 12 || fontSize > 48 ? (
          <p style={{ color: 'red' }}>
            Font size must be between 12 and 48 pixels
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
