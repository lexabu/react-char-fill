import React, { useState } from 'react';
import CharacterRating from './CharacterRating/CharacterRating';
import './App.css';
import { characters } from './utils/characters';

function App() {
  const [rating, setRating] = useState(3);
  const [character, setCharacter] = useState('★');
  const [maxRating, setMaxRating] = useState(5);

  const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCharacter(e.target.value);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseFloat(e.target.value));
  };

  const handleMaxRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxRating(parseInt(e.target.value, 10));
  };

  return (
    <div className="app">
      <h1>Character Rating Test</h1>
      <div className="rating-section">
        <CharacterRating
          rating={rating}
          character={character}
          maxRating={maxRating}
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
      </div>
    </div>
  );
}

export default App;
