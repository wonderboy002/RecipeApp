import React, { useEffect } from "react";
import axios from "axios";
import SavedRecipeCard from "../Components/SavedRecipeCard";
import { useCookies } from "react-cookie";
function SavedRecipes() {
  const [token, setCookies] = useCookies(["access-token"]);
  const [recipes, setRecipes] = React.useState([]);
  
  useEffect(() => {
    try {
      const savedRecipes = axios
        .get(
          `http://localhost:3001/recipe/saved/${localStorage.getItem("userId")}`
        )
        .then((res) => setRecipes(res.data.savedRecipes))
        .catch((e) =>
          console.log("Error while getting saved recipes of user!!!")
        );
    } catch (e) {
      console.log("Error while trying to fetch saved recipes of user!!!");
    }
  }, []);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);
  return (
    <div>
        
      {token["access-token"] ? (
         <div className="flex gap-4 flex-wrap">
              
         {
             recipes && recipes.map((ele,idx)=><SavedRecipeCard
              name={ele.name}
              instructions={ele.instructions}
              imageUrl={ele.imageUrl}
              cookingTime={ele.cookingTime}
              Ingredients={ele.Ingredients}
              userId={ele.author}
              recipeId={ele._id}
              key={idx}/>
             )
         }
     </div>
        
      ) : (
        <h1>Login to see your saved recipes</h1>
      )}
    </div>
  );
}

export default SavedRecipes;
