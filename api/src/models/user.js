// package import
import mongoose from "mongoose";

const {Schema} = mongoose;

const userType = {
    ADMIN: 'ADMIN',
    USER: 'USER'
}

const userSchema = new Schema({
    email: String,
    password: String,
    userType: {
        type: String,
        enum: Object.values(userType),
        default: userType.USER
    },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    city: String,
    street: String,
    buildingNumber: String,
    postalCode: String,
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
});

const User = mongoose.model("User", userSchema);

export default User;