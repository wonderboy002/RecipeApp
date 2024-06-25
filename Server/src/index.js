import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {UserRouter} from "../Routes/User.routes.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json()); //middleware to convert incoming data from frontend to json
app.use(cors()); //enabling communication bw frontend and backend


//connecting to mongodb
app.listen(3001, async (req, res) => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI
    );
    console.log("Successfully Connected to mongodb!!!!");
  } catch (e) {
    console.log("Error While Connecting to mongodb!!!", e);
  }
  console.log("Server stared");
});

app.use("/auth",UserRouter);

app.get("/",(req,res)=>{
  res.send("Hello There");
})
