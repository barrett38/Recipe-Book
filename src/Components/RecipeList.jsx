import React from "react";

const RecipeList = ({ recipes, onRecipeSelect, onDeleteRecipe }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <span onClick={() => onRecipeSelect(recipe)}>{recipe.title}</span>
            <button onClick={() => onDeleteRecipe(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
