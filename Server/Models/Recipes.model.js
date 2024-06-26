import mongoose from "mongoose";
const recipeSchema=new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    Ingredients : {
        type : [{type : String,required : true}]
    },
    instructions : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    cookingTime : {
        type : Number,
        required : true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})

export const Recipe=mongoose.model("Recipe",recipeSchema);