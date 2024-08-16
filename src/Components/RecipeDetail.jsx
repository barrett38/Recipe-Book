import React, { useState } from "react";

const RecipeDetail = ({ recipe, onEditRecipe }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleSave = () => {
    onEditRecipe({ ...recipe, title, ingredients, instructions });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{recipe.title}</h2>
          {recipe.ingredients.split("\n").map((ingredient, index) => (
            <p key={index}>- {ingredient}</p>
          ))}
          <p>{recipe.instructions}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
