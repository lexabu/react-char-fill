// Controls.tsx
import React from 'react';
const Controls = ({ rating, maxRating, emptyColor, fillColor, fontSize, step, interactive, characters, character, onRatingChange, onCharacterChange, onMaxRatingChange, onEmptyColorChange, onFillColorChange, onFontSizeChange, onInteractiveToggle, onInteractiveKeyDown, onStepChange, }) => {
    return (React.createElement("div", { className: "controls" },
        React.createElement("label", null,
            "Rating:",
            React.createElement("input", { type: "number", step: step, value: rating, onChange: onRatingChange, min: "0", max: maxRating, "aria-label": "Rating" })),
        React.createElement("label", null,
            "Character:",
            React.createElement("select", { value: character, onChange: onCharacterChange, "aria-label": "Character" }, characters.map(char => (React.createElement("option", { key: char.character, value: char.character }, char.character))))),
        React.createElement("label", null,
            "Max Rating:",
            React.createElement("input", { type: "number", value: maxRating, onChange: onMaxRatingChange, min: "1", "aria-label": "Max Rating" })),
        React.createElement("label", null,
            "Empty Color:",
            React.createElement("input", { type: "color", value: emptyColor, onChange: onEmptyColorChange, "aria-label": "Empty Color" })),
        React.createElement("label", null,
            "Fill Color:",
            React.createElement("input", { type: "color", value: fillColor, onChange: onFillColorChange, "aria-label": "Fill Color" })),
        React.createElement("label", null,
            "Font Size (px):",
            React.createElement("input", { type: "number", value: fontSize, onChange: onFontSizeChange, step: "2", "aria-label": "Font Size" })),
        React.createElement("label", null,
            "Interactive:",
            React.createElement("input", { type: "checkbox", checked: interactive, onChange: onInteractiveToggle, onKeyDown: onInteractiveKeyDown, "aria-label": "Toggle Interactive" })),
        React.createElement("label", null,
            "Step:",
            React.createElement("input", { type: "number", step: "0.1", value: step, onChange: onStepChange, min: "0.0", "aria-label": "Step" }))));
};
export default Controls;
