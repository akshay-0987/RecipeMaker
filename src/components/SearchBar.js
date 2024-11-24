import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState("");

  const handleSearch = () => {
    if (ingredients.trim()) {
      onSearch(ingredients.trim());
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter ingredients (e.g., chicken, garlic)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Find Recipes</button>
    </div>
  );
};

export default SearchBar;
