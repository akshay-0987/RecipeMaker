import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, isSearched }) => {
  // Show "No recipes found" only if a search has been made and no recipes are found
  if (isSearched && !recipes.length) {
    return (
      <div className="no-recipes-container">
        <p className="no-recipes">No recipes found. Try different ingredients!</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
