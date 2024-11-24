import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="recipe-details">
        <h3>{recipe.strMeal}</h3>
        <button
          onClick={() =>
            window.open(`https://www.themealdb.com/meal/${recipe.idMeal}`, "_blank")
          }
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
