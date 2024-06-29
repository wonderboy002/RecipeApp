import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import RecipeCard from "../Components/RecipeCard";
function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [token,setCookies]=useCookies(["access-token"]);
  const [flag,setFlag]=useState(false);
  useEffect(() => {
    try {
      const resData = axios
        .get("http://localhost:3001/recipe")
        .then((res) => {
          setRecipes(res.data);
        })
        .catch((e) => {
          console.log("Error While fetching recipes from server!!!");
        });
    } catch (e) {
      console.log("Error while fethching all recipes from server!!!", e);
    }
  }, []);

  
  return <div>
       {
        token["access-token"] ? (
            <div className="flex gap-4 flex-wrap">
              
                {
                    recipes && recipes.map((ele,idx)=><RecipeCard
                     name={ele.name}
                     instructions={ele.instructions}
                     imageUrl={ele.imageUrl}
                     cookingTime={ele.cookingTime}
                     Ingredients={ele.Ingredients}
                     userId={ele.author}
                     recipeId={ele._id}
                     key={idx}
                     flag={flag}
                     setFlag={setFlag}
                    />
                    )
                }
            </div>
        )
        : 
        (
            <h1>Please login to view all recipes</h1>
        )
       }
  </div>;
}

export default AllRecipes;
