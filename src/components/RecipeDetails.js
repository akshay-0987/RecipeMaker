import React from "react";

const RecipeDetails = ({ recipe, onClose }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="recipe-details-modal">
      <div className="recipe-details-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p>
          <strong>Category:</strong> {recipe.strCategory}
        </p>
        <p>
          <strong>Cuisine:</strong> {recipe.strArea}
        </p>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
