// CategoryButtons.tsx
import React from 'react';
const CategoryButtons = ({ categories, selectedCategory, onCategoryClick, }) => {
    return (React.createElement("div", { className: "category-controls" },
        categories.map(category => (React.createElement("button", { key: category, className: `category-button ${selectedCategory === category ? 'active' : ''}`, onClick: () => onCategoryClick(category) }, category))),
        React.createElement("button", { className: `category-button ${selectedCategory === '' ? 'active' : ''}`, onClick: () => onCategoryClick('') }, "All")));
};
export default CategoryButtons;
