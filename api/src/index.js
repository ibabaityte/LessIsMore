// package imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

// route imports
import UserRoutes from "./routes/users.js";
import OrderRoutes from "./routes/orders.js";
import ProductRoutes from "./routes/products.js";
import CouponRoutes from "./routes/coupons.js";
import SubscriberRoutes from "./routes/subscribers.js";
import CartItemRoutes from "./routes/cartItems.js";

// constants from env file
const port = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL;

// config
const api = express();
api.use(cors());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(express.json());

// config to be able to use routes so that requests can be made
api.use(UserRoutes);
api.use(OrderRoutes);
api.use(ProductRoutes);
api.use(CouponRoutes);
api.use(SubscriberRoutes);
api.use(CartItemRoutes);

// connecting to DB
mongoose.connect(`mongodb://127.0.0.1:27017/${dbUrl}`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected to database");
    }
});

// running the server
api.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});