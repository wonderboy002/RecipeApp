import React, { useEffect, useState } from "react";
import axios from "axios";

function SavedRecipeCard({
  name,
  instructions,
  imageUrl,
  cookingTime,
  Ingredients,
  userId,
  recipeId
}) {
  

  return (
    <div>
      <div className="card overflow-hidden rounded-xl flex flex-col gap-2 bg-slate-300 h-[350px] w-[270px]">
        <div className="img">
          <img src={imageUrl} className="w-full h-[175px]" alt="img-error" />
        </div>
        <div className="body p-4 flex flex-col gap-2 hide-scrollbar overflow-auto">
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
        
      </div>
    </div>
  );
}

export default SavedRecipeCard;
