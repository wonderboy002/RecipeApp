import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RecipeCard({
  name,
  instructions,
  imageUrl,
  cookingTime,
  Ingredients,
  userId,
  recipeId,
  flag,
  setFlag,
}) {
  const navigate = useNavigate();

  async function saveRecipe() {
    try {
      const response = await axios.put("http://localhost:3001/recipe", {
        recipeId,
        userId: localStorage.getItem("userId"),
      });
    } catch (e) {
      console.log("Error while trying to save recipe for a user!!!", e);
    }
  }

  async function deleteRecipe() {
    try {
      const response = await axios.delete(
        `http://localhost:3001/recipe/${recipeId}`
      );
      navigate("/");
    } catch (e) {
      console.log("Error while deleting recipe!!!", e);
    }
  }
  return (
    <div>
      <div className="card overflow-hidden rounded-xl flex flex-col gap-2 bg-slate-300 h-[350px] w-[270px]">
        <div className="img">
          <img src={imageUrl} className="w-full h-[175px]" alt="img-error" />
        </div>
        <div className="body p-6 flex flex-col gap-2 hide-scrollbar overflow-auto">
          <h1 className="font-bold text-teal-500">{name}</h1>
          <div>
            Ingredients :
            <ul className="flex flex-wrap gap-2">
              {Ingredients &&
                Ingredients.map((ele, idx) => {
                  return <li key={idx}>{ele}</li>;
                })}
            </ul>
          </div>
          <p className="font-semibold">{instructions}</p>
        </div>
        <div className="footer flex gap-4 p-4">
          <button
            onClick={saveRecipe}
            className="bg-green-600 font-semibold font-serif text-white p-2 rounded-lg hover:bg-green-700 "
          >
            Save
          </button>
          {localStorage.getItem("userId") === userId ? (
            <button
              className="bg-red-600 font-semibold font-serif text-white p-2 rounded-lg hover:bg-red-400"
              onClick={deleteRecipe}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
