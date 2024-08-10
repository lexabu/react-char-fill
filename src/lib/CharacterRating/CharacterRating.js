// CharacterRating.tsx
import React from 'react';
import CharacterFill from '../CharacterFill/CharacterFill';
const CharacterRating = ({ rating, character, maxRating, emptyColor, fillColor, fontSize, interactive = true, step, onMouseMove, onClick, onKeyDown, }) => {
    return (React.createElement("div", { tabIndex: 0, className: "rating-container", onMouseMove: interactive ? onMouseMove : undefined, onClick: interactive ? onClick : undefined, onKeyDown: interactive ? onKeyDown : undefined, role: "slider", "aria-valuenow": rating, "aria-valuemin": 0, "aria-valuemax": maxRating, "aria-label": "Character rating", style: { cursor: interactive ? 'pointer' : 'default' } }, [...Array(maxRating)].map((_, index) => (React.createElement(CharacterFill, { key: index + 1, position: index + 1, rating: rating, character: character, emptyColor: emptyColor, fillColor: fillColor, fontSize: fontSize, step: step })))));
};
export default CharacterRating;
