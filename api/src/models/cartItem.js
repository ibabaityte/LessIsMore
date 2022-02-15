// package import
import mongoose from "mongoose";

const {Schema} = mongoose;

const cartItemSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        size: String,
        quantity: Number,
        addedAt: {
            type: Number,
            default: () => new Date(Date.now())
        }
    }
);

const CartItem = mongoose.model("CartItem", cartItemSchema);

export default CartItem;