// package import
import mongoose from "mongoose";

const {Schema} = mongoose;

const couponSchema = new Schema(
    {
        code: String,
        expiryDateHours: Number,
    },
    {
        timestamps: true
    });

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;