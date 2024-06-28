import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useCookies } from "react-cookie";
const AddRecipePage = () => {
  const [Ingredients, setArray] = useState([]);
  const [ingredient, setIng] = useState("");
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [cookingTime, setCookingTime] = useState(undefined);
  const [author, setCookies] = useCookies(["access-token"]);

  function handleClick() {
    setArray(prev=>[...prev,ingredient]);
    
    setIng("");
  }
  async function addRecipe() {
  
    
    try {
      const response = await axios.post("http://localhost:3001/recipe", {
        name,
        Ingredients,
        instructions,
        imageUrl,
        cookingTime,
        author : localStorage.getItem("userId")
      });
      console.log(response);
      setName("");setArray([]);
      setCookingTime(undefined);setIng("");setInstructions("");
      alert("recipe Successfully added");
    } catch (e) {
      console.log("Error while adding recipe!!", e);
    }
  }
  return (
    <>
      {author["access-token"] ? (
        <div className="w-2/4 mx-auto mt-12 p-6 rounded-lg bg-slate-300 flex flex-col gap-4 items-center">
          <h1 className="font-bold text-teal-500 font-mono text-2xl">
            Create Recipe
          </h1>
          <TextField
            id="standard-basic"
            label="Recipe name"
            variant="standard"
            className="w-1/2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="w-2/3 flex flex-col">
            <div className="justify-evenly flex  items-center">
              <TextField
                id="standard-basic"
                label="Ingredients"
                variant="standard"
                className="w-1/2"
                value={ingredient}
                onChange={(e) => setIng(e.target.value)}
              />
              <button
                className="bg-teal-500 p-2 text-white font-bold font-serif rounded-lg hover:bg-white hover:text-black"
                onClick={handleClick}
              >
                Add
              </button>
            </div>
            <div className="Ingredients w-3/4 mx-auto flex gap-2 flex-wrap">
              {Ingredients &&
                Ingredients.map((ele, idx) => {
                  return (
                    <span className="text-teal-700" key={idx}>
                      {ele}
                    </span>
                  );
                })}
            </div>
          </div>
          <TextField
            id="standard-basic"
            label="instructions"
            multiline
            maxRows={4}
            variant="standard"
            className="w-1/2"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="imageUrl Url"
            variant="standard"
            className="w-1/2"
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
          />
          <TextField
            id="standard-basic"
            type="Number"
            label="Cooking Time"
            variant="standard"
            className="w-1/2"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
          <button
            onClick={addRecipe}
            className="w-3/4 px-4 py-2 font-mono text-white font-semibold rounded-2xl hover:bg-black bg-teal-600"
          >
            Submit
          </button>
        </div>
      ) : (
        <h1>Hello</h1>
      )}
    </>
  );
};

export default AddRecipePage;
