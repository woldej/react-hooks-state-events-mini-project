import React from "react";

function CategoryFilter(props) {
  const { categories, selectedCategory, handleCategoryChange } = props;

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Render <button> elements for each category */}
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryChange(category)}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
