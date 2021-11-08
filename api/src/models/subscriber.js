import mongoose from "mongoose";
const {Schema} = mongoose;

const subscriberSchema = new Schema({
    email: String
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;