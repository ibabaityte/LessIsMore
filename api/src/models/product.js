// package import
import mongoose from "mongoose";

const {Schema} = mongoose;

const productSchema = new Schema({
    title: String,
    description: String,
    price: String,
    photo: String,
    category: String,
    size: String,
    amount: String,
    cloudinaryId: String
});

const Product = mongoose.model("Product", productSchema);

export default Product;