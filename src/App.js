import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import RecipeList from "./components/RecipeList";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false); // Track if a search was performed

  const fetchRecipes = async (ingredients) => {
    setLoading(true);
    setIsSearched(true); // Mark as searched after the user triggers a search
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🍴 Recipe Finder</h1>
        <p>Discover delicious recipes by entering your favorite ingredients!</p>
      </header>
      <main>
        {/* Search Bar to allow ingredient search */}
        <SearchBar onSearch={fetchRecipes} />

        {/* Filters Component */}
        <Filters />

        {/* Recipe List or Loading Indicator */}
        {loading ? (
          <p className="loading">Loading recipes...</p>
        ) : (
          <RecipeList recipes={recipes} isSearched={isSearched} />
        )}
      </main>

      {/* Footer Section */}
      <footer>
        <p>© 2024 Recipe Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
