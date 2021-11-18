// package import
import mongoose from "mongoose";

const {Schema} = mongoose;

const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: Number,
        size: String
    }],
    comment: String,
    bill: Number
});

const Order = mongoose.model("Order", orderSchema);

export default Order;