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
    const [timer, setTimer] = useState(null);
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
    const handleCharacterChange = (e) => {
        setCharacter(e.target.value);
    };
    const handleRatingChange = (e) => {
        setRating(parseFloat(e.target.value));
        setCurrentRating(parseFloat(e.target.value));
    };
    const handleMaxRatingChange = (e) => {
        setMaxRating(parseInt(e.target.value, 10));
    };
    const handleEmptyColorChange = (e) => {
        setEmptyColor(e.target.value);
    };
    const handleFillColorChange = (e) => {
        setFillColor(e.target.value);
    };
    const handleFontSizeChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 4 && value <= 180) {
            setFontSize(value);
        }
    };
    const handleCharacterClick = (char) => {
        setCharacter(char);
    };
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const handleInteractiveToggle = () => {
        setInteractive(prev => !prev);
    };
    const handleInteractiveKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            setInteractive(prev => !prev);
        }
    };
    const calculateRating = (event, currentRating) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        let x;
        if ('clientX' in event) {
            // It's a MouseEvent
            x = event.clientX - rect.left;
        }
        else {
            // It's a KeyboardEvent
            x = (currentRating / maxRating) * rect.width;
        }
        const width = rect.width;
        let newRating = (x / width) * maxRating;
        // Snap to nearest step
        newRating = Math.round(newRating / step) * step;
        return newRating;
    };
    const handleMouseMove = (event) => {
        if (!interactive || isSubmitting)
            return;
        const newRating = calculateRating(event, currentRating);
        setCurrentRating(newRating);
    };
    const handleClick = (event) => {
        if (!interactive || isSubmitting)
            return;
        const newRating = calculateRating(event, currentRating);
        setRating(newRating);
        setCurrentRating(newRating);
        console.log('Rating submitted:', newRating);
        setIsSubmitting(true);
    };
    const handleKeyDown = (event) => {
        if (!interactive || isSubmitting)
            return;
        if (event.key === 'Enter' || event.key === ' ') {
            setRating(currentRating);
            console.log('Rating submitted:', currentRating);
            setIsSubmitting(true);
        }
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            let newRating = currentRating;
            if (event.key === 'ArrowLeft') {
                newRating = Math.max(0, currentRating - step);
            }
            else if (event.key === 'ArrowRight') {
                newRating = Math.min(maxRating, currentRating + step);
            }
            setCurrentRating(newRating);
        }
    };
    const filteredCharacters = characters.filter(charObj => {
        const { name, character, categories } = charObj;
        const matchesSearchTerm = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            character.includes(searchTerm) ||
            categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory
            ? categories.includes(selectedCategory)
            : true;
        return matchesSearchTerm && matchesCategory;
    });
    const categories = [
        ...new Set(characters.flatMap(charObj => charObj.categories)),
    ];
    return (React.createElement("div", { className: "app" },
        React.createElement("div", { className: "section controls-section" },
            React.createElement(Controls, { rating: rating, maxRating: maxRating, emptyColor: emptyColor, fillColor: fillColor, fontSize: fontSize, step: step, interactive: interactive, characters: filteredCharacters, character: character, onRatingChange: handleRatingChange, onCharacterChange: handleCharacterChange, onMaxRatingChange: handleMaxRatingChange, onEmptyColorChange: handleEmptyColorChange, onFillColorChange: handleFillColorChange, onFontSizeChange: handleFontSizeChange, onInteractiveToggle: handleInteractiveToggle, onInteractiveKeyDown: handleInteractiveKeyDown, onStepChange: e => setStep(parseFloat(e.target.value)) })),
        React.createElement("div", { className: "section rating-section" },
            React.createElement(CharacterRating, { rating: currentRating, character: character, maxRating: maxRating, emptyColor: emptyColor, fillColor: fillColor, fontSize: `${fontSize}px`, interactive: interactive, step: step, onMouseMove: handleMouseMove, onClick: handleClick, onKeyDown: handleKeyDown })),
        React.createElement("div", { className: "section search-container-section" },
            React.createElement(Toast, { message: submissionMessage, show: !!submissionMessage }),
            React.createElement("div", { className: "search-container" },
                React.createElement("label", null,
                    "Search Symbols:",
                    React.createElement("input", { type: "text", value: searchTerm, onChange: handleSearchChange, "aria-label": "Search Symbols" })))),
        React.createElement("div", { className: "section symbol-container-section" },
            React.createElement(CategoryButtons, { categories: categories, selectedCategory: selectedCategory, onCategoryClick: handleCategoryClick }),
            React.createElement("div", { className: "symbol-container", role: "menu" }, filteredCharacters.map(charObj => (React.createElement("button", { key: charObj.character, className: "symbol", onClick: () => handleCharacterClick(charObj.character), "aria-label": `Select symbol ${charObj.name}`, title: charObj.name }, charObj.character)))))));
}
export default App;
