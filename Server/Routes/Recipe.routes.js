import { Recipe } from "../Models/Recipes.model.js";
import mongoose from "mongoose";
import express from "express";

const router=express.Router();
//get all recipes
router.get("/",async (req,res)=>{
    try {
       const recipes=await Recipe.find({});
       res.json(recipes);
    }
    catch (e){
        console.log("Error fetching recipes!!!",e);
    }
});

//create a new recipe
router.post("/",async (req,res)=>{
    try {
       const newrecipe=new Recipe(req.body);
       const response=await newrecipe.save();
       res.json(response);
    }
    catch (e){
     console.log("Error while creating a new recipe!!!",e);
    }
})
export {router as recipeRouter}