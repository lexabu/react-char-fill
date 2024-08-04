// CategoryButtons.tsx
interface CategoryButtonsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  categories,
  selectedCategory,
  onCategoryClick,
}) => {
  return (
    <div className="category-controls">
      {categories.map(category => (
        <button
          key={category}
          className={`category-button ${
            selectedCategory === category ? 'active' : ''
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
      <button
        className={`category-button ${selectedCategory === '' ? 'active' : ''}`}
        onClick={() => onCategoryClick('')}
      >
        All
      </button>
    </div>
  );
};

export default CategoryButtons;
