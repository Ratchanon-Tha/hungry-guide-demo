import React from 'react';
import type { Category } from '../types';

interface CategoryBarProps {
  categories: Category[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories, selectedCategories, setSelectedCategories }) => {
  const handleCategoryClick = (label: string) => {
    setSelectedCategories(
      selectedCategories.includes(label)
        ? selectedCategories.filter((c) => c !== label)
        : [...selectedCategories, label]
    );
  };

  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat.label}
          className={`category-btn${
            selectedCategories.includes(cat.label) ? ' selected' : ''
          }`}
          onClick={() => handleCategoryClick(cat.label)}
          type="button"
        >
          <img
            src={cat.icon}
            alt={cat.label}
            className={`category-icon${
              selectedCategories.includes(cat.label) ? ' selected' : ''
            }`}
          />
          {selectedCategories.includes(cat.label) && (
            <img
              src="/src/assets/check-icon.svg"
              alt="Selected"
              className="category-check-icon"
            />
          )}
          <span className="category-label">{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
