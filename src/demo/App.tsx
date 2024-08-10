// App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import CategoryButtons from './CategoryButtons/CategoryButtons';
import CharacterRating from '../lib/CharacterRating/CharacterRating';
import Controls from './Controls/Controls';
import Toast from './Toast/Toast';
import { characters } from '../lib/utils/characters';

function App() {
  const [rating, setRating] = useState(2.75);
  const [character, setCharacter] = useState('♣');
  const [maxRating, setMaxRating] = useState(4);
  const [emptyColor, setEmptyColor] = useState('#808080');
  const [fillColor, setFillColor] = useState('#ffd700');
  const [fontSize, setFontSize] = useState(90);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [interactive, setInteractive] = useState(true);
  const [step, setStep] = useState(0.25);
  const [currentRating, setCurrentRating] = useState(2.5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    if (isSubmitting) {
      setSubmissionMessage('Rating submitted!');
      const timeoutId = window.setTimeout(() => {
        setIsSubmitting(false);
        setSubmissionMessage('');
      }, 2000);
      setTimer(timeoutId);
    }
    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCharacter(e.target.value);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseFloat(e.target.value));
    setCurrentRating(parseFloat(e.target.value));
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
    if (value >= 4 && value <= 180) {
      setFontSize(value);
    }
  };

  const handleCharacterClick = (char: string) => {
    setCharacter(char);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleInteractiveToggle = () => {
    setInteractive(prev => !prev);
  };

  const handleInteractiveKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setInteractive(prev => !prev);
    }
  };

  const calculateRating = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
    currentRating: number,
  ) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    let x: number;

    if ('clientX' in event) {
      x = event.clientX - rect.left;
    } else {
      x = (currentRating / maxRating) * rect.width;
    }

    const width = rect.width;
    let newRating = (x / width) * maxRating;

    newRating = Math.round(newRating / step) * step;
    return newRating;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || isSubmitting) return;
    const newRating = calculateRating(event, currentRating);
    setCurrentRating(newRating);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || isSubmitting) return;
    const newRating = calculateRating(event, currentRating);
    setRating(newRating);
    setCurrentRating(newRating);
    console.log('Rating submitted:', newRating);
    setIsSubmitting(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!interactive || isSubmitting) return;
    if (event.key === 'Enter' || event.key === ' ') {
      setRating(currentRating);
      console.log('Rating submitted:', currentRating);
      setIsSubmitting(true);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      let newRating = currentRating;

      if (event.key === 'ArrowLeft') {
        newRating = Math.max(0, currentRating - step);
      } else if (event.key === 'ArrowRight') {
        newRating = Math.min(maxRating, currentRating + step);
      }

      setCurrentRating(newRating);
    }
  };

  const filteredCharacters = characters.filter(charObj => {
    const { name, character, categories } = charObj;
    const matchesSearchTerm =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.includes(searchTerm) ||
      categories.some(cat =>
        cat.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory = selectedCategory
      ? categories.includes(selectedCategory)
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  const categories = [
    ...new Set(characters.flatMap(charObj => charObj.categories)),
  ];

  return (
    <div className="app">
      <div className="section controls-section">
        <Controls
          rating={rating}
          maxRating={maxRating}
          emptyColor={emptyColor}
          fillColor={fillColor}
          fontSize={fontSize}
          step={step}
          interactive={interactive}
          characters={filteredCharacters}
          character={character}
          onRatingChange={handleRatingChange}
          onCharacterChange={handleCharacterChange}
          onMaxRatingChange={handleMaxRatingChange}
          onEmptyColorChange={handleEmptyColorChange}
          onFillColorChange={handleFillColorChange}
          onFontSizeChange={handleFontSizeChange}
          onInteractiveToggle={handleInteractiveToggle}
          onInteractiveKeyDown={handleInteractiveKeyDown}
          onStepChange={e => setStep(parseFloat(e.target.value))}
        />
      </div>

      <div className="section rating-section">
        <CharacterRating
          rating={currentRating}
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

      <div className="section search-container-section">
        <Toast message={submissionMessage} show={!!submissionMessage} />
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
      </div>

      <div className="section symbol-container-section">
        <CategoryButtons
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        <div className="symbol-container" role="menu">
          {filteredCharacters.map(charObj => (
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
      <div className="install-section">
        Install via npm:
        <a
          href="https://www.npmjs.com/package/react-char-fill"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: fillColor }}
        >
          react-char-fill
        </a>
      </div>
    </div>
  );
}

export default App;
