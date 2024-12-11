import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../Models/User.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    //Grab data from the frontend
    const {username,password}=req.body;
    //check if user already exists
    const user=await User.findOne({username});
    if (user){
        res.json({message : "user already exists"});
        return;
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password,10);
    //create a new user
    const newuser=new User({username,password : hashedPassword});
    await newuser.save();
    res.json({message : "User Successfully Created"});
});

//registration done
router.post("/login", async (req, res) => {
    //grab data from frontend
    const {username,password}=req.body;
    //search user in database
    const user=await User.findOne({username});
    if (!user){
        return res.json({message : "User does not exist!!!"});
    }

    //validate the passwords
    const flag=await bcrypt.compare(password,user.password);

    //if incorrect password
    if (!flag){
        return res.json({message : "Incorrect password!!"});
    }

    //create a jwt token
    const token=jwt.sign({id : user._id},"secret");

    res.json({token,userId : user._id});
});

//login functionality nearly done

//get User information
router.get("/:userId",async (req,res)=>{
    try {
        const user=await User.findById(req.params.userId);
        res.json(user);
    }
    catch (e){
        console.log("error while fethcing user information!!!",e);
    }
});

export { router as UserRouter };
