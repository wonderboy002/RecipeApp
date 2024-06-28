import { Recipe } from "../Models/Recipes.model.js";
import mongoose from "mongoose";
import express from "express";
import { User } from "../Models/User.model.js";

const router = express.Router();
//get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (e) {
    console.log("Error fetching recipes!!!", e);
  }
});

//create a new recipe
router.post("/", async (req, res) => {
  try {
    const newrecipe = new Recipe(req.body);
    const response = await newrecipe.save();
    res.json(response);
  } catch (e) {
    console.log("Error while creating a new recipe!!!", e);
  }
});

//Saving a recipe
router.put("/", async (req, res) => {
  try {
    //find recipe to save
    const recipe = await Recipe.findById(req.body.recipeId);
    //find user who wants to save
    const user = await User.findById(req.body.userId);
    user.savedRecipes.push(recipe);//adding saved recipe to user model
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (e) {
    console.log("error while saving recipes for a user!!!", e);
  }
});


//get saved Recipes
router.get("/saved",async (req,res)=>{
    try {
       //find the user
       const user=await User.findById(req.body.userId);
       //get the saved recipes
       const savedRecipes=await Recipe.find({
        _id : user.savedRecipes
       });
       res.json({savedRecipes}); 
    }
    catch (e){
        console.log("Error while getting saved Recipes!!",e);
    }
});
export { router as recipeRouter };
