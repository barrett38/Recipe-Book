import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import RecipeDetail from "./RecipeDetail";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(savedRecipes);
  }, []);

  const saveRecipesToLocalStorage = (recipes) => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    saveRecipesToLocalStorage(updatedRecipes);
  };

  const editRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
    saveRecipesToLocalStorage(updatedRecipes);
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    saveRecipesToLocalStorage(updatedRecipes);
    setSelectedRecipe(null);
  };

  return (
    <div>
      <h1>Recipe Book</h1>
      <RecipeList
        recipes={recipes}
        onRecipeSelect={setSelectedRecipe}
        onDeleteRecipe={deleteRecipe}
      />
      {selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} onEditRecipe={editRecipe} />
      ) : (
        <RecipeForm onAddRecipe={addRecipe} />
      )}
    </div>
  );
};

export default RecipeApp;
