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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [interactive, setInteractive] = useState(true);
  const [step, setStep] = useState(0.25);

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

  const handleCategoryClick = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const handleInteractiveToggle = () => {
    setInteractive((prev) => !prev);
  };

  const calculateRating = (
    position: number,
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    target: HTMLElement,
  ) => {
    const rect = target.getBoundingClientRect();
    let x: number;

    if ('clientX' in event) {
      // It's a MouseEvent
      x = event.clientX - rect.left;
    } else {
      // It's a KeyboardEvent
      x = rect.width / 2; // Approximate center for keyboard events
    }

    const width = rect.width;
    let newRating = position - 1 + x / width;

    // Snap to nearest step
    newRating = Math.round(newRating / step) * step;
    return newRating;
  };

  const handleMouseMove = (
    position: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const newRating = calculateRating(position, event, event.currentTarget);
    setRating(newRating);
  };

  const handleClick = (
    position: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const newRating = calculateRating(position, event, event.currentTarget);
    setRating(newRating);
  };

  const handleKeyDown = (
    position: number,
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const newRating = calculateRating(position, event, event.currentTarget);
      setRating(newRating);
    }
  };

  const filteredCharacters = characters.filter((charObj) => {
    const { name, character, categories } = charObj;
    const matchesSearchTerm =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.includes(searchTerm) ||
      categories.some((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory = selectedCategory
      ? categories.includes(selectedCategory)
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  const categories = [
    ...new Set(characters.flatMap((charObj) => charObj.categories)),
  ];

  return (
    <div className="app">
      <h1>Character Rating Test</h1>
      <div className="controls">
        <label>
          Rating:
          <input
            type="number"
            step={step}
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
            {filteredCharacters.map((charObj) => (
              <option key={charObj.character} value={charObj.character}>
                {charObj.character}
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
        <label>
          Interactive:
          <input
            type="checkbox"
            checked={interactive}
            onChange={handleInteractiveToggle}
            aria-label="Toggle Interactive"
          />
        </label>
        <label>
          Step:
          <input
            type="number"
            step="0.01"
            value={step}
            onChange={(e) => setStep(parseFloat(e.target.value))}
            min="0.01"
            aria-label="Step"
          />
        </label>
      </div>
      <div className="rating-section">
        <CharacterRating
          rating={rating}
          character={character}
          maxRating={maxRating}
          emptyColor={emptyColor}
          fillColor={fillColor}
          fontSize={`${fontSize}px`}
          interactive={interactive}
          step={step}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
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
      <div className="category-controls">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
        <button
          className={`category-button ${selectedCategory === '' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('')}
        >
          All
        </button>
      </div>
      <div className="symbol-container" role="menu">
        {filteredCharacters.map((charObj) => (
          <button
            key={charObj.character}
            className="symbol"
            onClick={() => handleCharacterClick(charObj.character)}
            aria-label={`Select symbol ${charObj.name}`}
            title={charObj.name}
          >
            {charObj.character}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
