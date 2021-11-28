// package import
import mongoose from "mongoose";

const {Schema} = mongoose;

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    photo: String,
    category: String,
    cloudinaryId: String
});

const Product = mongoose.model("Product", productSchema);

export default Product;