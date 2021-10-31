import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const api = express();
const port = process.env.PORT || 8080;

api.use(cors());
api.use(express.json());

mongoose.connect("mongodb://localhost:27017",  (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Successfully connected to database");
    }
});

api.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});