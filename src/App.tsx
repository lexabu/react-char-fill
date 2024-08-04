import React, { useState } from 'react';
import CharacterRating from './CharacterRating/CharacterRating';
import './App.css';
import { characters } from './utils/characters';

function App() {
  const [rating, setRating] = useState(2.5);
  const [character, setCharacter] = useState('♣');
  const [maxRating, setMaxRating] = useState(5);
  const [emptyColor, setEmptyColor] = useState('#808080');
  const [fillColor, setFillColor] = useState('#ffd700');
  const [fontSize, setFontSize] = useState(120);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCharacterChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCharacter(e.target.value);
  };

  const handleRatingChange = (e: { target: { value: string } }) => {
    setRating(parseFloat(e.target.value));
  };

  const handleMaxRatingChange = (e: { target: { value: string } }) => {
    setMaxRating(parseInt(e.target.value, 10));
  };

  const handleEmptyColorChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmptyColor(e.target.value);
  };

  const handleFillColorChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFillColor(e.target.value);
  };

  const handleFontSizeChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 4 && value <= 180) {
      setFontSize(value);
    }
  };

  const handleCharacterClick = (char: React.SetStateAction<string>) => {
    setCharacter(char);
  };

  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const filteredCharacters = characters.filter((char) => {
    const ariaLabel = `Select symbol ${char}`;
    return (
      char.includes(searchTerm) ||
      ariaLabel.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
          fontSize={`${fontSize}px`}
        />
      </div>
      <div className="search-container">
        <label>
          Search Symbols:
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search Symbols"
          />
        </label>
      </div>
      <div className="symbol-container" role="menu">
        {filteredCharacters.map((char) => (
          <button
            key={char}
            className="symbol"
            onClick={() => handleCharacterClick(char)}
            aria-label={`Select symbol ${char}`}
          >
            {char}
          </button>
        ))}
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
            aria-label="Rating"
          />
        </label>
        <label>
          Character:
          <select
            value={character}
            onChange={handleCharacterChange}
            aria-label="Character"
          >
            {filteredCharacters.map((char) => (
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
            aria-label="Max Rating"
          />
        </label>
        <label>
          Empty Color:
          <input
            type="color"
            value={emptyColor}
            onChange={handleEmptyColorChange}
            aria-label="Empty Color"
          />
        </label>
        <label>
          Fill Color:
          <input
            type="color"
            value={fillColor}
            onChange={handleFillColorChange}
            aria-label="Fill Color"
          />
        </label>
        <label>
          Font Size (px):
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            step="2"
            aria-label="Font Size"
          />
        </label>
      </div>
    </div>
  );
}

export default App;
