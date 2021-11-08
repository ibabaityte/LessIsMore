import mongoose from "mongoose";
const {Schema} = mongoose;

const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    comment: String
});

const Order = mongoose.model("order", orderSchema);

export default Order;