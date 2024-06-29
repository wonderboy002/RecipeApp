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

    user?.savedRecipes?.push(recipe); //adding saved recipe to user model
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (e) {
    console.log("error while saving recipes for a user!!!", e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const recipeId = req.params.id;
    const response = await Recipe.findByIdAndDelete(recipeId);
    res.json(response);
  } catch (e) {
    console.log("Error while deleting recipe!!!", e);
  }
});

//get saved Recipes
router.get("/saved/:id", async (req, res) => {
  try {
    //find the user

    const user = await User.findById(req.params.id);
    //get the saved recipes
    const savedRecipes = await Recipe.find({
      _id: user.savedRecipes,
    });
    res.json({ savedRecipes });
  } catch (e) {
    console.log("Error while getting saved Recipes!!", e);
  }
});

//delete saved recipes
router.delete("/saved/:userId/:recipeId", async (req, res) => {
  try {
    //find the user with userId
    const user = await User.findById(req.params.userId);
    //find the recipe
    const recipe = await Recipe.findById(req.params.recipeId);
    console.log(user, recipe);
    //filter this recipe from saved recipe

    const filteredSavedRecipes = user.savedRecipes.filter(
      (saved_recipe, idx) => {
        return saved_recipe === req.params.recipeId;
      }
    );

   
    //update the user with new saved recipes list
    user.savedRecipes = filteredSavedRecipes;
    user.save();

    res.json({ savedRecipes: user.savedRecipes });
  } catch (e) {
    console.log("Error while trying to delete saved recipe!!!", e);
  }
});
export { router as recipeRouter };
