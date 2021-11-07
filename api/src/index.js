import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import UserRoutes from "./routes/users.js";
import OrderRoutes from "./routes/orders.js";
import ProductRoutes from "./routes/products.js";

const api = express();
const port = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL;

api.use(cors());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(express.json());
api.use(UserRoutes);
api.use(OrderRoutes);
api.use(ProductRoutes);

mongoose.connect(`mongodb://127.0.0.1:27017/${dbUrl}`,  (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Successfully connected to database");
    }
});

api.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});